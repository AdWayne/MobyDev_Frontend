//week 7.1
console.log('Hello World!');
console.warn('Это сообщение для отладки');
console.error('Это сообщение об ошибке');
alert('Week 7!');

//week 7.2
//1 он самый последний в списке снизу

//2
//var это тоже переменна как let но его можно сново написать и значение тоже измениться Почему он устаревший?Потому что его никто не использует:)Для недопонимание кодах,и чтобы надежно было писать и регулировать поведение переменных!

//3
//number
let integar = 18;
let float = 54.52;
let negative = -67;
console.log(integar)
console.log(typeof integar)
console.log(float)
console.log(typeof float)
console.log(negative)
console.log(typeof negative)

//string
let singleQuote = 'Hello'; //''
let dobleQuote = "World!"; //""
let templateLiteral = `Клянись`; //``
console.log(singleQuote)
console.log(typeof singleQuote)
console.log(dobleQuote)
console.log(typeof dobleQuote)
console.log(templateLiteral)
console.log(typeof templateLiteral)

//booleaan
let isTrue = true;
console.log(isTrue)
console.log(typeof isTrue)
let isFalse = false;
console.log(isFalse)
console.log(typeof isFalse)

//null
let user = null;
console.log(user)
console.log(typeof user)

//undefined
let undefinedValue;
console.log(undefinedValue)
console.log(typeof undefinedValue)

//Nan
let NAN = 0/0;
console.log(NAN)
console.log(typeof NAN) //прикол не знал что тип данные будет number хотя Nan это не число

//4

//из string в num
let string = '1'; //если напишу слово то значение выйдет NaN
let num = Number(string)
console.log(num)
console.log(typeof num)

let number = 1;
let stringnum = String(number)
console.log(stringnum)
console.log(typeof stringnum)

//из undefined в строку и number
let as = undefined;
console.log(String(as))
console.log(typeof as)
let number1 = Number(as); 
console.log(number1)
console.log(typeof number1)

//из null в строку и number
let bs = null;
console.log(Number(bs))
console.log(typeof bs) //ого object стал
let stringnull = String(bs);
console.log(stringnull)
console.log(typeof stringnull)


//5

//динамическая позиция
let value = 10; // сначала число
console.log(value);          // 10
console.log(typeof value);   // number

//тут даем на let value текст значение "десять"(фиксированного типа данного нету сможем изменить на че захотим)
value = "десять";
console.log(value);          // "десять"
console.log(typeof value);   // string



///6
let clientname = String(prompt("Имя: "));
let clientage = String(prompt("Возраст: ")); 
console.log("Имя:" + clientname)
console.log("Возраст:" + clientage)



//week 7.3
let a = 10;
let b = 5;
let c = 2;

console.log(a + b + c)
console.log(a + b - c)
console.log(a * b / c)
console.log(a % b)

//2
let x = 7;
console.log(x++ + ++x) //7 + 9= 16
console.log(x-- - --x) //7 - 5= 2

//3
let num1 = 4;
let num2 = 5;
let result = num1 + num2;
console.log("The result is: " + result);

//4
console.log(a>b && a>0 && b>0)
console.log(c<10 || c==2)
console.log(a/c != 5)

//5
let ten="10";
console.log(a == ten)  //true потому что 10=10 чисто значений
console.log(a === ten) //сравнил значение и тип данных strin!=number

//6
let X = 12;
let y = 11;
console.log((X % 2 === 0 || X % 3 === 0) && X % 6 !== 0); 
console.log(!(y > 10 || y < 5));






//week 7.4
//1
let chilso = Number(prompt("Число: "));
if (chilso > 10){
    console.log("Число больше 10")
}
else {
    console.log("Число меньше или равно 10")
}
//2
let DeleteFile = confirm("Вы уверены, что хотите удалить файл?");
if(DeleteFile){
    console.log("Файл удален")
}else {
    console.log("Удаление отменено")
}
//3
let vosrast = Number(prompt("Ваш возраст: "));
if(vosrast < 18){
    console.log('Вы еще подросток')
}else if(vosrast >=18 && vosrast <=30){
    console.log('Вы молодой взрослый')
}else{
    console.log('Вы взрослый')
}
//4
let chislo2 = Number(prompt("Число четное или нечетное: "));
let testnum = (chislo2 % 2 ==0)?"Это четное число": "Нечетное число";
console.log(testnum);
//5
let dayweek = Number(prompt("день недели: "));
let day;
switch(dayweek){
    case 1:
        day = "Понедельник";
        break;
    case 2:
        day = "Вторник";
        break;
    case 3:
        day = "Среда";
        break;
    case 4:
        day = "Четверг";
        break;
    case 5:
        day = "Пятница";
        break;
    case 6:
        day = "Суббота";
        break;
    case 7:
        day = "Воскресенье"
        break;
    default:
        day = "Некорректное значение";
}

console.log(day)

//Dop zadanie
let month = Number(prompt("времени года по введенному номеру месяца: "));
switch(month){
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");//ненавижу осень
        break;
    default:
        console.log("Максимум до 12 месяцев")
}

//week 7.2
//1
let age = 18;          ////Let можно изменить но написать и дать еще переменну Let нельзя.Мой возраст с каждым годом повышается на 1 число так и с Let можно изменить значение
console.log(age);
age=19;
console.log(age);

const name = 'Azamat'; ////константу нельзя изменить изза этого выводить как ошибка.ТО есть мое имя Азамат он и останется как Азамат
console.log(name)
name = 'Shrek';
console.log(name);

