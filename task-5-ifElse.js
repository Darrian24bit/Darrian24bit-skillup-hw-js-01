/* eslint-disable linebreak-style */
// Что будет результатом следующих сравнений:


// 5 >= 1  true
// 0 === 1 false
// 4 <= 1  false
// 1 != 1  false

// "A" > "B"  false «алфавитный» порядок.
// "B" < "C"  true «алфавитный» порядок.
// "a" > "A"  true строчные буквы имеют больший код во внутренней таблице кодирования
// "b" < "A"  false «алфавитный»  порядок.
// true === false  false  разные типы
// true != true  false  одинаковые типы


// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let some = ('hidden');
if (some === ('hidden')) {
  some = ('visible');
} else {
  some = ('hidden');
}
console.log(some); // visible

// Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let q = 5;
if (q === 0) {
  q = 1;
} else if (q < 0) {
  q = ('less then zero');
}
q > 0 ? q *= 10 : q = ('false');
console.log(q); // 50


// Дан объект
const car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};

// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
// и свойство needRepair в объекте car изменить на true;
// иначе изменить на false.
if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car); // { name: 'Lexus', age: 10, create: 2008, needRepair: true }


// Дан объект

const item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};

// .Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле
// price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль,
// обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.иначе если поля discount нет то вывести просто поле price в консоль.
if (item.discount && item.price != Number.NaN) {
  item.priceWithDiscount = (parseInt(item.price, 10)) - (parseInt(item.price, 10)) * (parseInt(item.discount, 10)) / 100;
}

console.log(item);


// Дан следующий код:

const product = {
  name: 'Яблоко',
  price: '10$',
};
const min = 10; // минимальная цена
const max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна
// максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
if (parseInt(product.price) >= min, parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log('there is no product');
} // Яблоко