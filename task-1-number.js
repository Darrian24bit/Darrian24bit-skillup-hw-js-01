//***Получить число pi из Math и округлить его до 2-х знаков после точки*******
let pi = (Number(Math.PI));
let piShort = (Number(pi.toFixed(2)));
console.log(piShort);
console.log(typeof (piShort)); //toFixed() возвращает число с () после строки

//***Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51******

let arr = [15, 11, 16, 12, 51, 12, 13, 51];
let max = Math.max.apply(null, arr); // для массива 
let min = Math.min.apply(null, arr); //Math min and max не работают с this для этого null
console.log((min + " = min value ") + (max + " = max value")); // метод apply принимает массив не как список (call)


let arr1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let arr2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51); // просто для чисел 
console.log((arr1 + " = min value ") + (arr2 + " = max value"));


// ***Работа с Math.random:*******

// ***Получить случайное число и округлить его до двух цифр после запятой********
Math.random();
console.log(Math.random()); //Math.random() случайное число от 0 до 1 
let randomShort = ((Math.random().toFixed(2)));
console.log(randomShort);

// ***Получить случайное целое число от 0 до X. X - любое произвольное число.********
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min));
} //функция возвращает случайное число в диапазоне

console.log(getRandomInRange(0, 100));

//***Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?********

console.log(parseFloat((0.6 + 0.7).toFixed(1))); //parseFloat приводим строку к числу с плавающей точкой и сокращаем

//****Получить число из строки ‘100$’******

let b = parseInt("‘100$’".replace(/\D+/g, "")); // parseInt строка в число
console.log(b); // /\D+/g регулярное выражение ( /\D/ ищет не цифровой символ,/g глобально )