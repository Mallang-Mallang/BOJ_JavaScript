//백준 입력값 복붙
let userInput = `3
29
38
12
57
74
40
85
61`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let numbers = input.split("\n").map(Number);

let max = numbers[0];
let count = 1;

for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    count = i + 1;
  }
}

console.log(max);
console.log(count);
