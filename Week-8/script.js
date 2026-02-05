//1
function greet(){
    console.log("Привет, мир!")
}
greet();

//2
let name1 = "Azamat";
function sayHello(name1){
    console.log("Привет, " + name1+"!")
}
sayHello(name1)

let name2 = "Nurken";
function sayHello(name2){
    console.log("Привет, " + name2+"!")
}
sayHello(name2)

const greet3 = function(name) {
   console.log("Привет, " + name + "!");
};

greet3("Sabina");

let name4 = prompt("Имя: ")  //через prompt
function sayHello(name4){
    console.log("Привет, " + name4+"!")
}
sayHello(name4)

sayHello = () => {
   return "Привет, Sanjar!";
}
console.log(sayHello());

//3
let add = (a, b) => a+b;
console.log(add(3,4));

//или
function sum(a,b){
    return a+b;
}
console.log(sum(3,4));

//4
function isEven(number){
    return number%2==0;
}
console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(3));
console.log(isEven(8));

//5
function max(a,b){
    if(a>b){
        return a;
    }else if(a==b){
        return "Числа равны";
    }
    else{
        return b;
    }
}
console.log(max(5,10));

//6
function getInitials(fullName){
    let parts = fullName.trim().split(" ");
    return parts[0][0].toUpperCase() + '.' + parts[1][0].toUpperCase() + '.';
}
console.log(getInitials("Joe Goldberg"));
console.log(getInitials("Нығмет Азамат"));
console.log(getInitials("Dexter Morgan"));

//7
function square(number){
    return number*number;
}
console.log(square(5));

function cube(number){
    return number*number*number;
}
console.log(cube(3));

function cube(number){
    return square(number)*number;
}
console.log(cube(2));

//8
let addi = (a, b) => a+b;
console.log(addi(3,4));


//Dop
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));











//Objects
let person = {
    name: "Azamat",
    age: 18,
    city: "Aktau"
}
console.log(person);

//2
console.log(person.name + " " + person.age);

let anothercity = "Almaty";
person.city = anothercity;
console.log(person);

//3
person.greet = "Привет, меня зовут " + [person.name] + " мне " + [person.age] + " лет!";
console.log(person);
console.log(person.greet);

//4
let obj1 = {
    a: 10,
    b: 20       
}
let obj2 = {
    a: 10,
    b: 20
}
console.log(obj1.a == obj2.a && obj1.b == obj2.b); 
console.log(obj1.a === obj2.a && obj1.b === obj2.b);

//5
let book = {
    title: "Война и мир",
    author: "Лев Толстой",
    details: {
        year: 1869,
        pages: 1225
    }
};
let copyBook = Object.assign({}, book);
copyBook.details.year = 2025;
console.log(book.details.year);
console.log(copyBook.details.year);
//Поверхностное копирование, поэтому изменение вложенного объекта влияет на оба объекта.

//6
let calculator = {
    a: 5,
    b: 10,
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};

console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.multiply());

//7
const car = {
    brand: "Toyota",
    model: "Camry",
}
car.model = "Corolla";
console.log(car); 
//const запрещает переназначение переменной, но не запрещает изменение содержимого объекта, на который она ссылается.
