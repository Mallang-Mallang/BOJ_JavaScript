//백준 입력값 복붙
let userInput = `5
5
2
3
4
1`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput

let numbers = input.split("\n").map(Number);
numbers.shift();
numbers.sort((a,b) => a-b);

for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}