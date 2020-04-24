/* eslint-disable no-console */
/* eslint-disable linebreak-style */
let string = 'some test string';

//* **********Получить первую и последнюю буквы строки**********
const firstChar = string.charAt(0); // получаем букву по ее индексу
const lastChar = string.charAt(15);
console.log(`${firstChar} this is first` + ` and ${lastChar} this is last`); // s this is first and g this is last

//* ***********Сделать первую и последнюю буквы в верхнем регистре************

string = string.charAt(0).toUpperCase() + string.substr(1) + string.charAt(15).toUpperCase();

console.log(string); // Some test stringG


//* ************Найти положение слова ‘string’ в строке******************

const result = string.match('string'); // метод ищет совпадения в строке
console.log(result); // ["string", index: 10, input: "Some test stringG", groups: undefined]


// *********Найти положение второго пробела ****************
const position = string.indexOf(' ', string.indexOf(' ') + 1); //
console.log(position); // 9

// Здесь находим позицию пробела начиная от позиции первого пробела


// ****************Получить строку с 5-го символа длиной 4 буквы****************

const fromTo = string.substr(5, [4]); // извлекает from>leight
console.log(fromTo); // test


// **************Получить строку с 5-го по 9-й символы****************
const fromTo2 = string.slice(4, 10); // возвращает новую между двумя индексами
console.log(fromTo2); // test


// ************Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)****************

console.log(string.length); // 17
const newStr = string.slice(0, 11);
console.log(newStr); // Some test s
console.log(newStr.length); // 11


// *************Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”****************

const a = 20;
const b = 16;
const c = `${a}${b}`; // преобразовываем к строке добавляя пустую строку
console.log(c); // 2016