let obj = {
    produkt: ("iphone") //Создать объект с полем product, равным ‘iphone’
}

obj.price = 1000; //Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
obj.curency = "dollar";
obj.details = { //Добавить поле details, которое будет содержать объект с полями model и color
    model: "",
    color: ""
}


console.log(obj); // {
//produkt: 'iphone',
// price: 1000,
// curency: 'dollar',
// details: { model: '', color: '' }
// }