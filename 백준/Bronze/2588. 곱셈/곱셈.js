//백준 입력값 복붙
let userInput = `472
385`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [A, B] = input.split("\n");

console.log(A * B[B.length - 1]);
console.log(A * B[B.length - 2]);
console.log(A * B[B.length - 3]);
console.log(A * B);