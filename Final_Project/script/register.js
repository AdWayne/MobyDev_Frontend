const BASE_URL = "https://virtserver.swaggerhub.com/mobydev-a27/News/1.0.0";

document
  .querySelector(".register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector(".name-input").value;
    const email = document.querySelector(".email-input").value;
    const password = document.querySelector(".password-input").value;

    try {
      await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      localStorage.setItem("user", JSON.stringify({ name, email, password }));

      alert("Регистрация успешна");
      window.location.href = "./login.html";
    } catch (error) {
      console.error(error);
    }
  });
