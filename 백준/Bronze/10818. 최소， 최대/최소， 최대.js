//백준 입력값 복붙
let userInput = `5
20 10 35 30 7`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [[N], num] = input.split("\n").map((v) => v.split(" ").map(Number));

let answer = []

answer.push(Math.min(...num), Math.max(...num))

console.log(answer.join(" "));
