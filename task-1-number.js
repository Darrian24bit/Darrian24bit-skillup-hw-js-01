/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
//* **Получить число pi из Math и округлить его до 2-х знаков после точки*******
const pi = (Number(Math.PI));
const piShort = (Number(pi.toFixed(2))); // toFixed() возвращает число с () после строки
console.log(piShort); // 3.14

//* **Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51******

const arr = [15, 11, 16, 12, 51, 12, 13, 51];
const max = Math.max.apply(null, arr); // для массива
const min = Math.min.apply(null, arr); // Math min and max не работают с this для этого null,метод apply принимает массив не как список (call)
console.log(`${min} = min value ${max} = max value`); // 11 = min value 51 = max value


const arr1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const arr2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51); // просто для чисел
console.log(`${arr1} = min value ${arr2} = max value`); // 11 = min value 51 = max value

// ***Работа с Math.random:*******

// ***Получить случайное число и округлить его до двух цифр после запятой********

const randomShort = ((Math.random().toFixed(2))); // Math.random() случайное число от 0 до 1
console.log(randomShort); // 0.17

// ***Получить случайное целое число от 0 до X. X - любое произвольное число.********

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min));
} // функция возвращает случайное число в диапазоне

console.log(getRandomInRange(0, 100)); // 40

//* **Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?********

console.log(parseFloat((0.6 + 0.7).toFixed(1))); // 1.3   parseFloat приводим строку к числу с плавающей точкой и сокращаем

//* ***Получить число из строки ‘100$’******

const b = parseInt('‘100$’'.replace(/\D+/g, '')); // parseInt строка в число, /\D+/g регулярное выражение ( /\D/ ищет не цифровой символ,/g глобально )
console.log(b); // 100