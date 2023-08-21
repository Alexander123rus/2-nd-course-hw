//задание 1
let i = 0;

while (i < 2) {
  alert("Привет");
  i++;
}
//задание 2
for (let i = 1; i <= 10; i++) {
  if (i % 1 == 0) {
    alert(i);
  }
}
//задание 3
for (let i = 7; i <= 23; i++) {
  if (i % 1 == 0) {
    alert(i);
  }
}
//задание 4
let obj = { Коля: 200, Вася: 300, Petya: 400 };

for (key in obj) {
  document.write([key] + " - Зарплата" + obj[key] + "долларов" + "<br>");
}
//задание 5
let n = 1000;
let num = 0;
while (n > 50) {
  num++;
  n /= 2;
}
document.write();
n;
document.write();
num;
//6 не пооймк как сделать
$days = [1 => 'Понедельник', 2 => 'Вторник', 3 => 'Среда', 4 => 'Четверг', 5 => 'Пятница', 6 => 'Субота', 7 => 'Воскресенье'];
let_dump($days[5]);

while($days) {console.log 
("Сегодня пятница, ...-е число. Необходимо подготовить отчет");
