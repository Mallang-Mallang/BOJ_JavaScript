//백준 입력값 복붙
let userInput = `11
10987654321`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [N, arr] = input.split("\n").map((v) => v.split("").map(Number));

let answer = arr.slice(0, N.join("")).reduce((acc, current) => {
  return acc + current
})

console.log(answer);