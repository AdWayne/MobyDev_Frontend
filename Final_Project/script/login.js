const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

document
  .querySelector(".container")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector(".email-input").value;
    const password = document.querySelector(".password-input").value;

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
//admin@mail.com
//123456
