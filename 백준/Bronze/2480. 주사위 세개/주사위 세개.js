//백준 입력값 복붙
let userInput = `2 2 2`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [A, B, C] = input
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

let answer = 0;

if (A === B && B === C) {
  answer = 10000 + A * 1000;
}else if(A === B || B === C) {
  answer = 1000 + B * 100;
}else {
  answer = C * 100
}

console.log(answer);
