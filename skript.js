//задание 1
login_ok = false;
  password = "";
  password = prompt("Введите пароль", "");
  if(password == "123")
  {
    login_ok = true;
    alert("Пароль введен верно");
    
  }
  if(login_ok == false)
  {
    alert("Пароль введен неправильно");
  }
//задание 2
let a = 2;
a= prompt("число")
if (a >= 0 && a <= 10) {
alert('Верно');
} else {
alert('Неверно');
};
//задание 3
let a = 0;
let b = 100;
a = prompt("")
if (a > 2 && a < 11 || b >= 6 && b < 14) {
alert('Верно');
} else {
alert('Неверно');
};
//задание4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//задание 5
let a = 3; 
a=prompt("Месяц года")
if (a == 12 , a == 1 ,a ==2) {
    alert('зима'); }
if (a == 3 , a == 4 ,a ==5) {
    alert('весна'); }
if (a == 6 , a == 7 ,a == 8) {
    alert('лето'); }
if (a == 9 , a == 10 ,a == 11) {
    alert('весна'); }