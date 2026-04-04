const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

function checkAuth() {
  const token = localStorage.getItem("authToken");
  const authBlock = document.querySelector(".header__auth");

  if (token) {
    authBlock.innerHTML = `
      <button class="button button--red logout-btn">
        Выйти
      </button>
    `;

    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("authToken");
        window.location.href = "./login.html";
      });
    }
  } else {
    authBlock.innerHTML = `
      <a href="./login.html" class="button button--blue">
        Войти
      </a>
    `;
  }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function loadCategory() {
  try {
    const response = await fetch(`${BASE_URL}/categories/${id}`);
    const data = await response.json();

    const nameInput = document.querySelector(".name-input");
    if (nameInput) nameInput.value = data.name;
  } catch (error) {
    console.error(error);
  }
}

const saveBtn = document.querySelector(".save-btn");
if (saveBtn) {
  saveBtn.addEventListener("click", async () => {
    const nameInput = document.querySelector(".name-input");
    const name = nameInput ? nameInput.value : "";

    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        alert("Обновлено!");
        window.location.href = "./categories.html";
      }
    } catch (error) {
      alert
      console.error(error);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  loadCategory();
});