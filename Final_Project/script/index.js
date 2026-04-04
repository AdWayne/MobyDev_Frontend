const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

async function deleteNews(id) {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    alert("Авторизуйтесь для удаления!");
    return;
  }

  const isConfirmed = confirm("Вы уверены что хотите удалить данную новость?");
  if(!isConfirmed) return;

  try {
    const response = await fetch(`${BASE_URL}/news/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer $(authToken)`
      }
    });

    if (response.ok) {
      alert("Новость успешно удалена.");
      fetchAndRenderNews();
    } else {
      alert('Ошибка при удаления новости')
    }
  } catch (error) {
    console.error('Ошибка', error)
  }
}

async function fetchNews() {
  const cached = localStorage.getItem("news");

  if (cached) {
    renderNews(JSON.parse(cached));
  }

  const response = await fetch(`${BASE_URL}/news`);
  const data = await response.json();

  localStorage.setItem("news", JSON.stringify(data));
  renderNews(data);
}

async function fetchAndRenderNews() {
  try {
    const response = await fetch(`${BASE_URL}/news`);
    const newsArray = await response.json();

    document.querySelector(".news-grid").innerHTML = newsArray
      .map(
        (news) => `
                <article class="news-card">
                    <div class="news-card__image">
                        <img src="${news.image}" alt="${news.title}">
                    </div>

                    <div class="news-card__content">
                        <a class="news-card__link" href="./news.html?id=${news.id}">
                            <h2 class="news-card__title">
                                ${news.title}
                            </h2>

                            <p class="news-card__attributes">
                                ${news.createdAt} • ${news.category?.name || ""}
                            </p>
                        </a>

                        <div class="news-card__author">
                            <div class="user">
                                <div class="user__avatar">
                                    <img src="https://i.pravatar.cc/150?u=admin@admin.com">
                                </div>
                                <p class="user__name">
                                    ${news.author || "Администратор"}
                                </p>
                            </div>
                        </div>

                        <div class="news-card__actions">
                            <a href="./edit-news.html?id=${news.id}"
                               class="button button--blue button--small">
                                Редактировать
                            </a>

                            <button
                                class="button button--red button--small"
                                onclick="deleteNews(${news.id})">
                                Удалить
                            </button>
                        </div>
                    </div>
                </article>
            `,
      )
      .join("");

    setupAuthUI();
  } catch (error) {
    console.error(error);
  }
}

function setupAuthUI() {
  const token = localStorage.getItem("authToken");
  const headerAuth = document.querySelector(".header__auth");

  if (token) {
    headerAuth.innerHTML = `
            <div class="header-user">
                <div class="header-user__container">
                <div class="header-user__avatar">A</div>
                <span class="header-user__name">Администратор</span>
                </div>
                <button class="button button--red" onclick="logout()">
                    Выйти
                </button>
            </div>
        `;

    const createBtn = document.createElement("button");

    createBtn.className = "create-news-btn";
    createBtn.innerHTML = "+";

    createBtn.onclick = () => {
      window.location.href = "./create.html";
    };

    document.body.appendChild(createBtn);
  }
}

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAndRenderNews();
});
