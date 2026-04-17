document.addEventListener("DOMContentLoaded", async () => {
  const authToken = localStorage.getItem("authToken");
  const headerAuth = document.querySelector(".header__auth");

  if (authToken && headerAuth) {
    headerAuth.innerHTML = `
      <button class="button button--red" onclick="logout()">
        Выйти
      </button>
    `;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("id");

  if (categoryId) {
    try {
      const response = await fetch(`https://webfinalapi.mobydev.kz/categories/${categoryId}`);
      if (response.ok) {
        const categoryData = await response.json();
        document.querySelector(".name-input").value = categoryData.name || "";
      }
    } catch (error) {
      console.error("Ошибка при получении категории:", error);
    }
  }

  const saveBtn = document.querySelector(".save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const name = document.querySelector(".name-input").value;

      if (!name) {
        alert("Введите название категории");
        return;
      }

      try {
        const response = await fetch(`https://webfinalapi.mobydev.kz/category/${categoryId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          alert("Категория обновлена!");
          window.location.href = "./categories.html";
        } else {
          alert("Ошибка при обновлении (Bad Request 400)");
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  const deleteBtn = document.querySelector(".delete-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", async (event) => {
      event.preventDefault();

      if (!confirm("Вы уверены, что хотите удалить эту категорию?")) {
        return;
      }

      try {
        const response = await fetch(`https://webfinalapi.mobydev.kz/category/${categoryId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          alert("Категория удалена!");
          window.location.href = "./categories.html";
        } else {
          alert("Не удалось удалить категорию.");
        }
      } catch (error) {
        console.error("Ошибка при удалении:", error);
      }
    });
  }
});

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}