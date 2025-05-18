//산술 연산자

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);

console.log(num1++);
console.log(++num1);

let num3 = 15;
num3 += 5;
num3 -= 5;
num3 /= 5;
num3 *= 5;
num3 %= 5;

let num4 = 10;
let num5 = "10";

console.log(num4 === num5); //false
console.log(num4 == num5); //true

console.log(num4 != num5); //false
console.log(num4 !== num5); //true

let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(b > c);
console.log(a <= c);
console.log(a > c);

let price = 10000;
console.log("가격: " + price + "원");

let isClicked = true;
let isOpened = false;

console.log(!isClicked);
console.log(!isOpened);

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

let num6;
let num7 = 10;

console.log(num6 ?? 20); //20
console.log(num7 ?? 20); //10

let num = 100;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result);
