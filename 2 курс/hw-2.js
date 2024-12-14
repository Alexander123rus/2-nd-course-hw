// задание 
let a = 10;
alert(a);
a = 20;
alert(a);

// ЗАДАНИЕ 2

const iphone = 2007;
alert(`Год выпуска первого Iphone: ${iphone}`);

// задание 3

const name = `Брендан Эйх`;
alert(`Имя создателя языка JS - ${name}.`);

// задание 4 

let d = 10;
let b = 2;
alert(`Сумма ${d} + ${b} = ${d+b}`)
alert(`Разность ${d} - ${b} = ${d-b}`)
alert(`Произведение  ${d} * ${b} = ${d*b}`)
alert(`Частное  ${d} / ${b} = ${d/b}`)

// задание 5

let f = 2;
let g = 5;
let result = f ** g;
alert(`Число ${f} в степени ${g} = ${result}`)

// задание 6 

let h = 9;
let j = 2;
let result1 = a % b;
alert(`Остаток от деления ${h} на ${j} = ${result}`)

// задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// задание 8

let age = prompt('Сколько тебе лет?');

alert(`Тебе ${age} года`);

// задание 9

let user = {     
    name: "John", 
    age: 30,
    isAdmin: 1  
  };

// задание 9.1

user['city of residence']= `Moscow`;

// задание 9.2

user.age = 15;

// задание 9.3

delete user['city of residence'];

// задание9.4

let info = prompt(`Какую информацию хотите узнать о пользователе?`)
alert(user[info])

// задание 10

const name_1 = prompt(`Введите ваше имя:`)
alert(`Привет, ${name_1}`);