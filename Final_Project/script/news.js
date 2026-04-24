const BASE_URL = "https://webfinalapi.mobydev.kz";

function checkAuth() {
  const token = localStorage.getItem("authToken");
  const authBlock = document.querySelector(".header__auth");

  if (token) {
    authBlock.innerHTML = `
      <button class="button button--red logout-btn">Выйти</button>
    `;
    document.querySelector(".logout-btn").addEventListener("click", () => {
      localStorage.removeItem("authToken");
      window.location.href = "./login.html";
    });
  } else {
    authBlock.innerHTML = `
      <a href="./login.html" class="button button--blue">Войти</a>
    `;
  }
}

function getNewsIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function deleteNews(id) {
  const token = localStorage.getItem("authToken");

  if (!confirm("Вы уверены, что хотите удалить эту новость?")) return;

  try {
    const response = await fetch(`${BASE_URL}/news/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert("Новость удалена");
      window.location.href = "./index.html";
    } else {
      alert("Ошибка при удалении. Проверьте права доступа.");
    }
  } catch (error) {
    console.error("Ошибка сети:", error);
  }
}

async function fetchAndRenderNewsById(newsId) {
  try {
    const response = await fetch(`${BASE_URL}/news/${newsId}`);
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
    const news = await response.json();

    document.querySelector(".news-title").textContent = news.title;
    document.querySelector(".news-author").innerHTML = `
      <img class="user_logo" src="https://i.pravatar.cc/150?u=${news.author.id}" alt="Аватар" />
      ${news.author.name || "Неизвестный автор"}
    `;
    document.querySelector(".news-date").textContent = new Date(
      news.createdAt,
    ).toLocaleDateString();
    document.querySelector(".news-category").textContent =
      news.category.name || "";
    document.querySelector(".news-image").src = `${BASE_URL}${news.thumbnail}`;
    document.querySelector(".news-content").textContent = news.content;

    const token = localStorage.getItem("authToken");
    const actionsBlock = document.querySelector(".floating-actions");
    const deleteBtn = document.querySelector(".circle-btn.blue");
    const editBtn = document.querySelector(".circle-btn.red");

    if (token) {
      deleteBtn.onclick = () => deleteNews(newsId);
      editBtn.onclick = () => {
        window.location.href = `./edit-news.html?id=${newsId}`;
      };
    } else {
      if (actionsBlock) actionsBlock.style.display = "none";
    }
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  const newsId = getNewsIdFromUrl();
  if (newsId) {
    fetchAndRenderNewsById(newsId);
  } else {
    console.error("ID новостей не найден в URL");
  }
});
