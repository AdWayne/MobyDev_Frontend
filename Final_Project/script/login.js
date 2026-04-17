const BASE_URL = "https://webfinalapi.mobydev.kz";

document
  .querySelector('.container')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector(".email-input").value;
    const password = document.querySelector(".password-input").value;

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("authToken", token);
        window.location.href = "./index.html";
      } else {
        alert("Неверные данные.");
      }
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
    }
  });
//test@gmail.com
//string1B
