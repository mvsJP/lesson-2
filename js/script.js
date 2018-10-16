/* Задание №1 */

console.log("***Задание №1 ***")

var a = 1;
var b = 1;
var c;
var d;

c = ++a; /* Полная запись: с = a = a + 1; Т.е. в данном выражении мы увеличили 
a на 1, а так как это преинкремент, то результат мы видим сразу. */
d = b++; /* b тоже увеличили на 1, но это инкремент, соответственно прибавление 
мы увидим только в следующем выражении. */ 
console.log("с=" + c);
console.log("d=" + d);

console.log("a=" + a); // проверка логики
console.log("b=" + b); // проверка логики

c = (2 + ++a); /* a увеличили еще на 1, и мы это сразу видим, так как преинкремент*/
console.log("с=" + c);

d = (2 + b++); /* b увеличили еще на 1, но этого мы сразу не видим, т.к. инкремент,
а увидим при следующем выводе переменной. */
console.log("d=" + d);

console.log("a=" + a); // проверка логики
console.log("b=" + b); // проверка логики

/* Задание №2 */

console.log("***Задание №2 ***")

a = 2;
var x = 1 + (a *= 2); /* Умножение в данном случае производится одновременно 
с присваиванием нового значения переменной a через оператор присвоения*/


console.log("a=" + a); // Проверка логики
console.log("x=" + x); // x = 5

// Задание № 3

console.log("***Задание №3 ***")

a = parseInt(prompt('Введите значение "a" (задание 3): '));
b = parseInt(prompt('Введите значение "b" (задание 3): '));

if ((a >= 0) && (b >= 0)) {
	console.log("Разность значений:" + (a - b));
} else if ((b < 0) && (a < 0)) {
	console.log("Произведение значений:" + (a * b));
} else {
	console.log("Сумма значений:" + (a + b));
}

// Задание № 4

console.log("***Задание №4 ***")

a = parseInt(prompt('Введите значение "a" от 0 до 15 (задание 4): '));

switch (a) {
	case 0:
		console.log("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 1:
		console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 2:
		console.log("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 3:
		console.log("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 4:
		console.log("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 5:
		console.log("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 6:
		console.log("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 7:
		console.log("7, 8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 8:
		console.log("8, 9, 10, 11, 12, 13, 14, 15");
		break;
	case 9:
		console.log("9, 10, 11, 12, 13, 14, 15");
		break;
	case 10:
		console.log("10, 11, 12, 13, 14, 15");
		break;
	case 11:
		console.log("11, 12, 13, 14, 15");
		break;
	case 12:
		console.log("12, 13, 14, 15");
		break;
	case 13:
		console.log("13, 14, 15");
		break;
	case 14:
		console.log("14, 15");
		break;
	case 15:
		console.log("15");
		break;
}

/* Задание №5 */

console.log("***Задание №5 ***")

function slozhenie(z, y) {
	return (z + y);
}
a = parseInt(prompt('Введите значение "a" (задание 5): '));
b = parseInt(prompt('Введите значение "b" (задание 5): '));
var k = slozhenie(a, b);
console.log("Сложение: " + k);

function vichitanie(z, y) {
	return (z - y);
}
k = vichitanie(a, b);
console.log("Вычитание: " + k);

function umnozhenie(z, y) {
	return (z * y);
}
k = umnozhenie(a, b);
console.log("Умножение: " + k);

function delenie(z, y) {
	return (z / y);
}
k = delenie(a, b);
console.log("Деление: " + k);

/* Задание №6 */

console.log("***Задание №6 ***")

function mathOperation(arg1, arg2, z) {
	arg1 = parseInt(prompt('Введите значение "arg1" (задание 6): '));
	arg2 = parseInt(prompt('Введите значение "arg2" (задание 6): '));
	z = prompt('Введите тип операции (задание 6): '	
	switch (z)
	{
		case "+":
			console.log(slozhenie(arg1, arg2));
			break;
		case "-":
			console.log(vichitanie(arg1, arg2));
			break;
		case "*":
			console.log(umnozhenie(arg1, arg2));
			break;
		case "/":
			console.log(delenie(arg1, arg2));
			break;
	}
}
	