const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

function checkAuth() {
  const token = localStorage.getItem("authToken");
  const authBlock = document.querySelector(".header__auth");

  if (token) {
    authBlock.innerHTML = `<button class="button button--red logout-btn">Выйти</button>`;
    document.querySelector(".logout-btn").addEventListener("click", () => {
      localStorage.removeItem("authToken");
      window.location.href = "./login.html";
    });
  } else {
    authBlock.innerHTML = `<a href="./login.html" class="button button--blue">Войти</a>`;
  }
}

document.addEventListener("DOMContentLoaded", checkAuth);

document.querySelector(".save-btn").addEventListener("click", async () => {
  const name = document.querySelector(".name-input").value;

  if (!name) {
    alert("Введите название");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      alert("Категория создана!");
      window.location.href = "categories.html";
    } else {
      const errorData = await response.json().catch(() => null);
      alert("Ошибка создания" + (errorData?.message ? ": " + errorData.message : ""));
    }
  } catch (error) {
    console.error(error);
  }
});