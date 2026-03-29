// ================================
// ЗАДАНИЕ 1
// GET-запрос к /posts/1
// ================================

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function(response) {
    // Проверяем успешность запроса (status 200–299)
    if (!response.ok) {
      throw new Error("Ошибка запроса: " + response.status);
    }

    // Преобразуем ответ в JSON
    return response.json();
  })
  .then(function(data) {
    // Выводим данные поста
    console.log("Задание 1:");
    console.log("Заголовок:", data.title);
    console.log("Тело:", data.body);
  })
  .catch(function(error) {
    console.log("Ошибка в задании 1:", error.message);
  });


// ================================
// ЗАДАНИЕ 2
// POST-запрос
// ================================

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // Указываем метод
  headers: {
    "Content-Type": "application/json" // Тип отправляемых данных
  },
  body: JSON.stringify({
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Задание 2:");
    console.log("Ответ сервера:", data);
  })
  .catch(function(error) {
    console.log("Ошибка в задании 2:", error.message);
  });


// ================================
// ЗАДАНИЕ 3
// Обработка ошибки (несуществующий URL)
// ================================

fetch("https://jsonplaceholder.typicode.com/nonexistent")
  .then(function(response) {

    // fetch НЕ вызывает ошибку при 404,
    // поэтому нужно проверять вручную
    if (!response.ok) {
      throw new Error("Страница не найдена! Код: " + response.status);
    }

    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log("Задание 3:");
    console.log("Произошла ошибка:", error.message);
  });


// ================================
// ЗАДАНИЕ 4
// PUT и DELETE
// ================================

// PUT — обновление поста
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Обновленный заголовок",
    body: "Обновленный текст",
    userId: 1
  })
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Задание 4 (PUT):");
    console.log("Обновленный пост:", data);
  })
  .catch(function(error) {
    console.log("Ошибка PUT:", error.message);
  });


// DELETE — удаление поста
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(function(response) {
    console.log("Задание 4 (DELETE):");
    console.log("Статус удаления:", response.status);
  })
  .catch(function(error) {
    console.log("Ошибка DELETE:", error.message);
  });


// ================================
// ЗАДАНИЕ 5
// async/await + try/catch
// ================================

async function getPostAsync() {
  try {
    // Ждем выполнение запроса
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // Проверяем успешность
    if (!response.ok) {
      throw new Error("Ошибка async запроса: " + response.status);
    }

    // Ждем преобразование в JSON
    const data = await response.json();

    console.log("Задание 5 (async/await):");
    console.log("Заголовок:", data.title);

  } catch (error) {
    console.log("Ошибка в async/await:", error.message);
  }
}

getPostAsync();


// ================================
// ЗАДАНИЕ 6
// GET с кастомными заголовками
// ================================

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
  headers: {
    "Authorization": "Bearer my_token_123",
    "X-Custom-Header": "Homework48"
  }
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Задание 6:");
    console.log("Количество комментариев:", data.length);
    console.log("Первый комментарий:", data[0]);
  })
  .catch(function(error) {
    console.log("Ошибка в задании 6:", error.message);
  });