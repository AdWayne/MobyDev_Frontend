const authToken = localStorage.getItem("authToken");

const headerAuth = document.querySelector(".header__auth");

if (authToken) {
  headerAuth.innerHTML = `
    <button class="button button--red" onclick="logout()">
      Выйти
    </button>
  `;
}

document.querySelector(".button--blue").addEventListener("click", async (event) => {
  event.preventDefault();

  const title = document.querySelector(".create-label").value;
  const content = document.querySelector(".create-input").value;
  const categoryId = document.querySelector(".create-select").value;
  const thumbnail = document.querySelector(".fileInput").files[0];

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
    const response = await fetch("https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${authToken}`,
        'Accept': 'application/json',
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