//Чему равно а, почему?

//let a = 0 || 'string';     логическое сравнение, не пустая строка > 0
//let a = 1 && 'string';     'string' вернул последний true
//let a = null || 25;        25  вернул true
//let a = null && 25;        null  остановился на первом false
//let a = null || 0 || 35;   35 вернул true
//let a = null && 0 && 35;   null  остановился на первом false
//console.log(a);


//Что отобразится в консоли. Почему?
console.log(12 + 14 + '12');

console.log(12 + 14 + '12'); // 12+14=26 + строка 12 = 2612
console.log(3 + 2 - '1'); // 4  при вычитании строка приводится к числу
console.log('3' + 2 - 1); // 31  строка добавляется к результату 2-1 
console.log(true + 2); // 3 true приравнивается к 1 + 2 
console.log(+'10' + 1); // 11   +'10' приводит строку к числу
console.log(undefined + 2); // NaN   undefined становится NaN после численного преобразования. 
console.log(null + 5); // 5   null приводится к 0
console.log(true + undefined); // NaN   undefined становится NaN после численного преобразования. 
console.log(5 + "34"); // 534   5+ строка 
console.log(5 - "4"); // 1  строка приводится к числу при вычитании 
console.log(10 % 5); // 0 остаток от деления 
console.log(5 % 10); // 5 остаток от деления 
console.log("Java" + "Script"); // JavaScript строки складываются 
console.log(" " + 0); // 0 пустая строка при сложении равна 0 
console.log(true + true); // 2   true 1  false 0
console.log(true + false); // 1   true 1  false 0 
console.log(false + true); // 1   true 1  false 0
console.log(false - true); //-1   true 1  false 0
console.log(3 - 4); //-1   
console.log("Bob" - "bill"); // NaN    не приводятся к числам 