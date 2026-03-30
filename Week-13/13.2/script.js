//1 zadanie
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Задание 1:");
    console.log("title:", data.title);
    console.log("body:", data.body);
  });

//2 zadanie
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
  })
})
.then(response => response.json())
.then(data => {
  console.log("Задание 2:");
  console.log(data);
});

//3 zadanie
fetch("https://jsonplaceholder.typicode.com/nonexistent")
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log("Задание 3:");
    console.error("Произошла ошибка:", error.message);
  });

//4 zadanie
//PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Обновленный заголовок",
    body: "Новое содержимое",
    userId: 1
  })
})
.then(response => response.json())
.then(data => {
  console.log("PUT результат:");
  console.log(data);
});
//DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(response => {
  console.log("DELETE результат:");
  console.log("Пост удален", response.status);
});

//5 zadanie
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Ошибка загрузки");
    }

    const data = await response.json();
    console.log("Задание 5:");
    console.log(data);

  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

getPost();

//6 zadanie
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
  headers: {
    "Authorization": "Bearer my-token",
    "User-Agent": "fetch-example"
  }
})
.then(response => response.json())
.then(data => {
  console.log("Задание 6:");
  console.log(data);
});