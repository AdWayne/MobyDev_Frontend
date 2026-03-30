//1 zadanie
//AJAX это технология, позволяющая отправлять запросы на сервер и получать данные без перезагрузки страницы.
//Пример: Instagram — загрузка постов, Telegram — новые сообщения

// 2 zadanie
const pumb = new XMLHttpRequest();

pumb.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

pumb.onload = function () {
  const data = JSON.parse(pumb.responseText);

  console.log("Задание 2:");
  data.forEach((post) => {
    console.log(post.title);
  });
};

pumb.send();

//3-6 zadanie
const loader = document.getElementById("loader");
const postsContainer = document.getElementById("posts");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status !== 200) {
    showError("Ошибка загрузки данных");
    return;
  }

  loader.remove();

  const data = JSON.parse(xhr.responseText);

  const ul = document.createElement("ul");

  data.forEach((post) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <small>User ID: ${post.userId}</small>
    `;

    ul.appendChild(li);
  });

  postsContainer.appendChild(ul);
};

xhr.onerror = function () {
  showError("Сервер не отвечает");
};

xhr.send();

function showError(message) {
  loader.innerText = message;
}
