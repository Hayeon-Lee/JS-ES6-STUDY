let num = 5;
if (num < 10) {
  console.log("num 은 10 보다 작습니다.");
} else {
  console.log("num 은 10보다 크거나 같습니다.");
}

num = 50;
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else {
  if (num > 10) {
    console.log("num은 10보다 큽니다.");
  } else {
    console.log("num은 10입니다.");
  }
}

num = 100;
if (num < 10) {
  console.log("num은 10보다 작습니다.");
} else if (num > 10) {
  console.log("num은 10보다 큽니다.");
} else {
  console.log("num은 10입니다.");
}
