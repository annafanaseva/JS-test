//Задача. Создайте переменную str и присвойте ей значение 'abcde'. 
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

const str = 'abcde';
document.write(str[0]);
document.write(str[1]);
document.write(str[4]);

//Напишите скрипт, который считает количество секунд в переданном кол-ве дней 
//(кол-во дней вводим через prompt). 

// let day = Number(prompt('Введите количество дней'));
// document.write("<h2>" + day*3600 + "</h2>");

//Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. 
//Количество строк кода при этом не должно измениться. Код для переделки:

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
// alert(num);  

//Создайте переменные str1='Привет, ' и str2='Мир!'. 
//С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.  
const str1 = 'Привет, ';
const str2 = 'Мир!';
document.write("<h2>" + str1 + str2 + "</h2>");

//Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.  

const name = 'Ann';


document.write("<h2> Hi, " + name + "!</h2>");

//Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

const number = 2;
document.write("<h2>" + number ** 2 + "</h2>");

//Создайте переменную num и присвойте ей значение '12345'. 
//Найдите произведение (умножение) цифр этого числа.

num = '12345';
document.write("<h2>" + +num[0] * +num[1] * +num[2] * +num[3] * +num[4] + "</h2>");

//Работа с for для массивов
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i]);
}

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
//Запишите ее в переменную result.

let result = 0;
for (i = 0; i < arr.length; i++) {
  result += arr[i];
}
document.write("<h2>" + result + "</h2>");

//Работа с for-in
//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' }

for (var item in obj) {
  document.write("<h2>" + item + " - " + obj[item] + "</h2>");
}

//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. 
//С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

obj = { 'Коля': '200', 'Вася': '300', 'Петя': '400' }
for (var item in obj) {
  document.write("<h2>" + item + " - зарплата " + obj[item] + " долларов" + "</h2>");
}

//Дан массив с элементами 2, 5, 9, 15, 0, 4. 
//С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, 
//которые больше 3-х, но меньше 10.

arr = [2, 5, 9, 15, 0, 4];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    document.write(arr[i]);
  }
}

//Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива.
arr = [-2, 5, 9, -15, 0, 4];
result = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result += arr[i];
  }
}

document.write("<h2>" + result + "</h2>");

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
//Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    document.write("<h2>Есть</h2>");
    break;
  }
}
console.log(i);

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
arr = [10, 20, 30, 50, 235, 3000];
let line = '';

for (i = 0; i < arr.length; i++) {
  line = arr[i] + '';

  if (line[0] === '1' || line[0] === '2' || line[0] === '5') {
    console.log(line);
  }
}

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
//С помощью цикла for создайте строку '- 1-2-3-4-5-6-7-8-9-'.



//Составьте массив дней недели. 
//С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.



//Составьте массив дней недели. 
//С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
//Текущий день должен храниться в переменной day.