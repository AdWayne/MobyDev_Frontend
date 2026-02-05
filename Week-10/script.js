let Welcome = document.getElementById("message");
Welcome.textContent = "Добро пожаловать в JavaScript!";

let boxes = document.getElementsByClassName("box");
    
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "green";
    }

let qtextElement = document.getElementById("text");
document.querySelector("#text").textContent = "Hello";

let changeboxes = document.querySelectorAll(".box");
    
    for (let i = 0; i < changeboxes.length; i++) {
      changeboxes[i].style.backgroundColor = "blue";
    }

let highlightElements = document.querySelectorAll(".highlight");

highlightElements.forEach(paragraph => {
  paragraph.style.color = "red";
});


//10.2
let myDiv = document.getElementById("myDiv");

    myDiv.addEventListener("click", function() {
      myDiv.style.backgroundColor = "blue";
    });

    myDiv.addEventListener("mouseover", function() {
      console.log("Элемент нажат");
    });

let script = document.getElementById("textInput");
script.addEventListener("input", function(event) {
  console.log("Текущее значение: " + event.target.value);
});

let list = document.getElementById("list");
    list.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        console.log("Вы нажали на:", event.target.textContent);
      }
    });

let input = document.getElementById("keyboardInput");

    input.addEventListener("keydown", function(event) {
      console.log("Код нажатой клавиши:", event.code);
      console.log("Символ клавиши:", event.key);
    });

//11
localStorage.setItem("greeting", "Привет, мир!");
let greeting = localStorage.getItem("greeting");
console.log(greeting);

//11.2
greeting = localStorage.getItem("greeting");
console.log(greeting);
localStorage.removeItem("greeting");
console.log(localStorage.getItem("greeting"));

//11.3
let user = {
  name: "Азамат",
  age: 18
};
localStorage.setItem("user", JSON.stringify(user));
let hranUser = JSON.parse(localStorage.getItem("user"));
console.log(hranUser);

//11.4
let usercountry = JSON.parse(localStorage.getItem("user"));
user.country = "KAZAKHSTAN";
localStorage.setItem("user", JSON.stringify(user));
let updatedUser = JSON.parse(localStorage.getItem("user"));
console.log(updatedUser);

//11.5

if (localStorage.getItem("user")){
  let user = JSON.parse(localStorage.getItem("user"));
  console.log("Мен туралы", user);
} else {
  let user2 = {
    name: "Sabina",
    age: 19,
    country: "Russia"
};
  localStorage.setItem("user", JSON.stringify(user2));
  console.log("Пользователь создан и сохранен в localStorage");
}

//11.6
localStorage.clear();
console.log("localStorage очищен");
getItem = localStorage.getItem("user");
console.log("Попытка получить данные пользователя после очистки:", getItem);

//11.7
let massiv = [
  {title: "JavaScript", completed: false},
  {title: "HTML", completed: true},
  {title: "CSS", completed: true}
];

localStorage.setItem("massiv", JSON.stringify(massiv));
let SavedMassiv = JSON.parse(localStorage.getItem("massiv"));
console.log(SavedMassiv);

//11.8
let completedTasks = JSON.parse(localStorage.getItem("massiv"));
if (massiv && massiv.length > 0) {
  massiv[0].completed = true;
  localStorage.setItem("massiv", JSON.stringify(massiv));
  console.log("Обновленный массив задач:", massiv);
}
else {
  console.log("Массив задач не найден в localStorage.");
}
