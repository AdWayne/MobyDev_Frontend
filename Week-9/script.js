let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

//2
console.log(fruits[0]);
console.log(fruits[2]);
fruits.push("Груша");
console.log(fruits);

//3
let lastFruit = fruits.pop();
console.log(lastFruit);
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits)

//4
let newfruits = ["Яблоко", "Банан", "Апельсин"];

newfruits.forEach(function(newfruit) {
  console.log(newfruit);
});

//5
let lengths = newfruits.map(function(newfruit) {
  return newfruit.length;
});
console.log(lengths);

//6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 == 0;
});
console.log(evenNumbers);

//7
let sum = numbers.reduce(function(total, number) {
  return total + number;
},);
console.log(sum);

//8
let search = numbers.find(function(number) {
  return number > 5;
});
console.log(search);

//9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined);

//10
let incudesfruits = newfruits;
let hasBanana = incudesfruits.includes("Банан");
console.log(hasBanana);

//11
let reverseFruits = newfruits.reverse();
console.log(reverseFruits);



//Циклы
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

//2
let b = 1;
while (b <= 10) {
  console.log(b);
  
  if (b == 5) {
    b++; 
    continue;
  }
  
  if (b == 8) {
    break;
  }
  
  b++;
}

//3
let count = 0;
do {
  count++; //цикл жасайт сосын do жасайт типо цикл работает потом проверяет через do
  console.log(count);
} while (count < 5)

//4
// while (true) {
//   let num = Number(prompt("Введите число: "));
  
//   if (num === 10) {
//     console.log("Цикл завершён!");
//     break;
//   }
  
//   console.log("Попробуй снова!");
// }

//5
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//6
let j = 0;

for (;;) {
  console.log(j);
  j++;

  if (j > 100) {
    break;
  }
}

//7
let arr3 = [1, 2, 3, 4, 5];
for (let k = 0; k < arr3.length; k++) {
  console.log(arr3[k]);
}
//8
//while для неопределенного цикла
//for для определенного цикла
//do while когда нужно выполнить цикл минимум один раз

let password;

while (password !== "1234") {
  password = prompt("Введите пароль:");
}

console.log("Доступ разрешён!");
//while когда неизвестно, сколько раз выполнять.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//for когда известно количество повторений заранее.

//9
for (let m=10; m>=1; m--) {
  console.log(m);
}

//10
for (let n=1; n<=10; n++) {
  if (n % 2 !== 0) {
    continue;
  }
    console.log(n);
  } 