function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 15);

function add2(num1, num2) {
  return num1 + num2;
}

let result = add2(20, 25);
console.log(`두 숫자를 더한 값은 ${result} 입니다.`);

function add3(num1, num2) {
  return num1 + num2;
  console.log("함수 호출"); //이 부분은 실행되지 않는다.
}

console.log(`두 숫자를 더한 결과는 ${add3(10, 15)} 입니다.`);

function compare(num) {
  if (num === 0) {
    console.log("num의 값이 0입니다.");
  } else if (num < 0) {
    console.log("num의 값이 0보다 작습니다");
  } else {
    if (num >= 10) {
      console.log("num의 값이 10보다 크거나 같습니다.");
    } else {
      console.log("num의 값이 0보다 크고 10보다 작습니다.");
    }
  }
}

compare(15);

function compare(num) {
  //참고로, 함수 이름이 동일하면 후에 선언한 것이 덮어쓴다.
  if (num === 0) return "num의 값이 0입니다.";
  if (num < 0) return "num의 값이 0보다 작습니다.";
  if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
  return "num의 값이 0보다 크고 10보다 작습니다";
}

console.log(compare(15));
