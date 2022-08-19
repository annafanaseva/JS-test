//Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
//Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. 
//Решите задачу через switch-case.
//Реализуем ввод переменной через prompt

let a = Number(prompt('Введите число'));
let result = '';

switch (a) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "лето";
    break;
  case 4:
    result = "осень";
    break;
  default:
    alert("Uncorrected value");
}

document.write("<p>" + result + "</p>");

//В переменной day лежит какое-то число из интервала от 1 до 31. 
//Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = 22;
if (day <= 10) {
  document.write("<p>" + day + " попадет в первую декаду</p>");
} else if (day > 10 && day <= 20) {
  document.write("<p>" + day + " попадет в вторую декаду</p>");
} else {
  document.write("<p>" + day + " попадет в третью декаду</p>");
}


//В переменной month лежит какое-то число из интервала от 1 до 12. 
//Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const month = 12;

if (month === 12 || month <= 2) {
  document.write("<p>" + month + " это месяц зимы");
} else if (month >= 3 && month < 6) {
  document.write("<p>" + month + " это месяц весны</p>");
} else if (month >= 6 && month < 9) {
  document.write("<p>" + month + " это месяц лета</p>");
} else if (month >= 9 && month < 12) {
  document.write("<p>" + month + " это месяц осени</p>");
}

//Дана строка, состоящая из символов, например, 'abcde'. 
//Проверьте, что первым символом этой строки является буква 'a'. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

const stroke = 'abcde';
if (stroke[0] === 'a') {
  document.write("<p>yes</p>");
} else {
  document.write("<p>no</p>");
}

//Дана строка с цифрами, например, '12345'. 
//Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

let strokeNum = '12345';
if (strokeNum[0] === '1' || strokeNum[0] === '2' || strokeNum[0] === '3') {
  document.write("<p>yes</p>");
} else {
  document.write("<p>no</p>");
}

//Дана строка из 3-х цифр. Найдите сумму этих цифр. 
//То есть сложите как числа первый символ строки, второй и третий.
let Sum = Number(strokeNum[0]) + Number(strokeNum[1]) + Number(strokeNum[2]);
document.write("<p>" + Sum + "</p>");

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

strokeNum = '132222';
if ((Number(strokeNum[0]) + Number(strokeNum[1]) + Number(strokeNum[2])) === (Number(strokeNum[3]) + Number(strokeNum[4]) + Number(strokeNum[5]))) {
  document.write("<p>yes</p>");
} else {
  document.write("<p>no</p>");
}