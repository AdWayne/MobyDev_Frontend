const BASE_URL = "https://webfinalapi.mobydev.kz";

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
        <button class="button button--red" onclick="logout()">Выйти</button>
      </div>
    `;

    const createBtn = document.createElement("button");
    createBtn.className = "create-news-btn";
    createBtn.innerHTML = "+";
    createBtn.onclick = () => window.location.href = "./create-category.html";
    document.body.appendChild(createBtn);
  }
}

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}

async function fetchCategories() {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) throw new Error("Ошибка сети");
    const data = await response.json();
    renderCategories(data);
  } catch (error) {
    console.error(error);
  }
}

function renderCategories(categories) {
  const list = document.querySelector(".categories-list");
  list.innerHTML = categories.map(c => `
    <div class="category-item">
      <span>${c.name}</span>
      <div>
        <button onclick="editCategory(${c.id})">Редактировать</button>
        <button onclick="deleteCategory(${c.id})">Удалить</button>
      </div>
    </div>
  `).join("");
}

function editCategory(id) {
  window.location.href = `edit-category.html?id=${id}`;
}

async function deleteCategory(id) {
  try {
    const response = await fetch(`${BASE_URL}/category/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Ошибка при удалении");
    alert("Удалено");
    fetchCategories();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupAuthUI();
  fetchCategories();
});