const authToken = localStorage.getItem("authToken");
const headerAuth = document.querySelector(".header__auth");
const fileBtn = document.querySelector(".file-btn");
const fileInput = document.querySelector(".cover-input");

fileBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

if (authToken) {
  headerAuth.innerHTML = `
    <button class="button button--red" onclick="logout()">
      Выйти
    </button>
  `;
}

document
  .querySelector(".create-button")
  .addEventListener("click", async (event) => {
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
      const response = await fetch("https://webfinalapi.mobydev.kz/news", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        alert("Новость успешно добавлена!");
        window.location.href = "./index.html";
      } else {
        alert("Ошибка при добавлении новости");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  });


function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "./login.html";
}
