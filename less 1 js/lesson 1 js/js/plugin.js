// переменные задачи
// 1.
// var price =  ,
// 		maxNumber =  ,
// 		name = '',
// 		MIN_PRICE =  ;

// 2.
// console.log(test);
// var test = 'string';
// undefined , переменная неопределена

// var x = 'string';
// var x = 'string № 2';
// console.log(x);
// выдаст string№ 2

// 3.
// console.log(test);
// let test = 'sting';
// у let не работает всплытие

// const x = 'string';
// x = 'string№2';
// console.log(x);
// константу не можем менять

// let someVariable = 15;
// let someVariable = 10;
// 2ух одинаковых let не может быть

// строки задачи

let string = 'some test string';
//1
console.log(string.charAt(0));
console.log(string[string.length -1]);
//2
console.log( string.charAt(0).toUpperCase());
console.log(string[string.length -1].toUpperCase());
//3
console.log(string.indexOf('string'));
//4
console.log(string.lastIndexOf(' '));
//5
console.log(string.substr(5,4));
//6
console.log(string.substring(5,9));
//7
console.log(string.substring(0,string.length-6));
//8
var a = 20,
	b = 16;
var c = a.toString(),
	d = b.toString();
var str = c + d;
console.log(str);

//числа задачи

//1
var w = Math.PI;
console.log((w).toFixed(2));

//2
var arr = [15,11,16,12,51,12,13,51];
console.log(Math.min.apply({},arr));
console.log(Math.max.apply({},arr));

//3
var randomNumber = Math.random();
console.log((randomNumber).toFixed(2));

//???что то не пошло)))))
var randomNum = Math.random();
var z = Math.floor(randomNum * (x - 0 + 1)) + 0;
console.log((z).toFixed(0));

//4
var f = 0.7,
	r = 0.6;
var e = f + r;
console.log((e).toFixed(2));

//5
var x = '100$';
console.log(parseInt(x));

//обьекты задачи

//1
var obj = {
	product: 'iphone',
	price: 1000,
	currency: 'dollar',
	details: {
		model: '5s',
		color: 'grey',
	}
}
console.log(obj);

//присваивание задачи

//1
a += 10;
b *= 18;
c -= 10;

x += a;
y *= z;
i *= 5 * y;

//2
var x = Math.pow(a,2);