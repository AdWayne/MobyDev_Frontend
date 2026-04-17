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

const newsId = getNewsIdFromUrl();

const BASE_URL = "https://webfinalapi.mobydev.kz";

async function fetchAndRenderNewsById(newsId) {
  try {
    const response = await fetch(`${BASE_URL}/news/${newsId}`);
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
    const news = await response.json();

    document.querySelector(".news-title").textContent = news.title;
    document.querySelector(".news-author").textContent = news.author.name || "Неизвестный автор";
    document.querySelector(".news-date").textContent = new Date (news.createdAt).toLocaleDateString();
    document.querySelector(".news-category").textContent = news.category.name || "";
    document.querySelector(".news-image").src = `${BASE_URL}${news.thumbnail}`;
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
  } else {
    console.error('ID новостей не найден в URL');
  }
});
