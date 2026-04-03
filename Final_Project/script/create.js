const fileInput = document.getElementById("fileInput");
const fileBtn = document.querySelector(".file-btn");
const fileText = document.querySelector(".file-text");

// клик по кнопке
fileBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fileInput.click();
});

// выбор файла
fileInput.addEventListener("change", function () {
  if (this.files.length > 0) {
    fileText.textContent = this.files[0].name;
  } else {
    fileText.textContent = "Не выбран файл";
  }
});