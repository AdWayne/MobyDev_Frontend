document.addEventListener("DOMContentLoaded", async () => {
  const authToken = localStorage.getItem("authToken");
  const headerAuth = document.querySelector(".header__auth");

  if (authToken) {
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
      const response = await fetch(
        `https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0/news/${newsId}`
      );

      const newsData = await response.json();

      document.querySelector(".create-input").value = newsData.title;
      document.querySelector(".create-textarea").value = newsData.content;
      document.querySelector(".create-select").value = newsData.category?.id;

    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  document
    .querySelector(".create-button")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const title = document.querySelector(".create-input").value;
      const content = document.querySelector(".create-textarea").value;
      const categoryId = document.querySelector(".create-select").value;

      if (!title || !content || !categoryId) {
        alert("Заполни все поля");
        return;
      }

      const data = {
        title,
        content,
        createdAt: new Date().toISOString().split("T")[0],
        author: "Администратор",
        categoryId: Number(categoryId),
        image: "https://i.pravatar.cc/300"
      };

      try {
        const response = await fetch(
          `https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0/news/${newsId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          alert("Новость обновлена!");
          window.location.href = "./index.html";
        } else {
          alert("Ошибка обновления");
        }
      } catch (error) {
        console.error(error);
      }
    });
});

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}