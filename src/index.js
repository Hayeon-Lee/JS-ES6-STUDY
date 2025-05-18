let integer = 10;
console.log(typeof integer);

let float = 49.99;
console.log(typeof float);

let inf = 100 / 0;
console.log(inf); //출력: Infinity
console.log(typeof inf);

let nan = "string" / 10;
console.log(nan); //출력: NaN
console.log(typeof nan);

let bigNum1 = 999999999999999n;
let bigNum2 = BigInt("9999999999999999");

console.log(typeof bigNum1);
console.log(typeof bigNum2);

let username = "hayeon";
let intro = `내 이름은 ${username} 입니다.`;
console.log(intro);

let isClicked = false;
if (isClicked) console.log("클릭.");
else console.log("클릭 안 됨.");

let empty = null;
console.log(typeof empty); //오류: object 가 출력됨
console.log(empty === null); //true로 출력됨으로써, null 이 맞음.

let undefined_num;
console.log(typeof undefined_num);

let num1 = "15";
let num2 = 5;
console.log(num1 / num2); //3

let num3 = "15";
let num4 = 5;
console.log(num3 + num4); //155
console.log(parseInt(num3, 10) + num4);
