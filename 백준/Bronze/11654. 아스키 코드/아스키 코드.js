//백준 입력값 복붙
let userInput = `A`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let A = input;

console.log(A.charCodeAt(0));