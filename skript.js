//задание 1
let password = "12345abcde"

if( beginWithoutDigit.test(password) &&
    withoutSpecialChars.test(password) &&
    containsLetters.test(password) ){
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
//задание 2
let hour = 100;
if (hour < 1 || hour > 100) {
	alert('Верно');
}

else(hour < 100 || hour > 300){
    alert(' не верно');
}
//задание 3
let num = 10;
if (num == 10) {
alert('Right');
} else {
alert('Wrong');
};
alert(num);
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));
//задание 4
const
  Seasons: array [0..3] of string = ('Зима', 'Весна', 'Лето', 'Осень');
let
  n: integer;
begin
  readln(n);
  if n in [1..12] then
    writeln(Seasons[(n mod 12) div 3])
  else
    Write('Неверный номер месяца');
end.