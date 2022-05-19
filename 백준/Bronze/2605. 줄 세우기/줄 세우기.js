//백준 입력값 복붙
let userInput = `5
0 1 1 3 2`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [stdCount, stdNum] = input.split("\n")
stdCount = parseInt(stdCount)
stdNum = stdNum.split(" ").map(Number)

let answer = [];

stdNum.slice(0, stdCount).forEach((v,i) => {answer.splice(answer.length - v, 0, i+1)})

console.log(answer.join(" "));