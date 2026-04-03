function checkAuth() {
  const token = localStorage.getItem("authToken");
  const authBlock = document.querySelector(".header__auth");

  if (token) {
    authBlock.innerHTML = `
      <button class="button button--red logout-btn">
        Выйти
      </button>
    `;

    document.querySelector(".logout-btn").addEventListener("click", () => {
      localStorage.removeItem("authToken");
      window.location.href = "./login.html";
    });
  } else {
    authBlock.innerHTML = `
      <a href="./login.html" class="button button--blue">
        Войти
      </a>
    `;
  }
}

function getNewsIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

async function fetchAndRenderNewsById(newsId) {
  try {
    const response = await fetch(`${BASE_URL}/news/${newsId}`);
    const news = await response.json();

    document.querySelector(".news-title").textContent = news.title;
    document.querySelector(".news-author").textContent =
      news.author || "Администратор";
    document.querySelector(".news-date").textContent = news.createdAt;
    document.querySelector(".news-category").textContent =
      news.category?.name || "";
    document.querySelector(".news-image").src = news.image;
    document.querySelector(".news-content").textContent = news.content;
  } catch (error) {
    console.error("Ошибка при получения новостей:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checkAuth();

  const newsId = getNewsIdFromUrl();
  if (newsId) {
    fetchAndRenderNewsById(newsId);
  }
});
