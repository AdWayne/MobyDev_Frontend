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
  const newsId = urlParams.get("id");

  if (newsId) {
    try {
      const response = await fetch(`https://webfinalapi.mobydev.kz/news/${newsId}`);
      if (response.ok) {
        const newsData = await response.json();

        document.querySelector(".name-input").value = newsData.title || "";
        document.querySelector(".content-input").value = newsData.content || "";
        document.querySelector(".category-input").value = newsData.categoryId || "";
      } else {
        console.error("Ошибка при получении данных");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  }


document
  .querySelector('.create-button')
  .addEventListener('click', async (event) => {
    event.preventDefault();

    const title = document.querySelector(".name-input").value;
    const content = document.querySelector(".content-input").value;
    const categoryId = document.querySelector(".category-input").value;
    const thumbnail = document.querySelector(".cover-input").files[0];

    if (!title || !content || !categoryId || !thumbnail) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("categoryId", categoryId);
    formData.append("thumbnail", thumbnail);

    try {
      const response = await fetch(`https://webfinalapi.mobydev.kz/news/${newsId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Новость успешно обновлена!");
        window.location.href = "./index.html";
      } else {
        const errorResponse = await response.json();
        alert("Ошибка при добавлении новости!" + (errorResponse.message || 'Проверьте данные.'));
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  });
});

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}
