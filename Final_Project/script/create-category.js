document.addEventListener("DOMContentLoaded", () => {
  const authToken = localStorage.getItem("authToken");
  const headerAuth = document.querySelector(".header__auth");

  if (authToken && headerAuth) {
    headerAuth.innerHTML = `
      <button class="button button--red" onclick="logout()">
        Выйти
      </button>
    `;
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
        const response = await fetch("https://webfinalapi.mobydev.kz/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          alert("Категория успешно создана!");
          window.location.href = "./categories.html";
        } else {
          const errorData = await response.json().catch(() => null);
          alert("Ошибка при создании: " + (errorData?.message || "Проверьте данные"));
        }
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    });
  }
});

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}