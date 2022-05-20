//백준 입력값 복붙
let userInput = `26`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let N = parseInt(input)

let sum = 0;
let cnt = 0;

for (let i = 0; i < 99; i ++) {
    cnt++;
    sum = Math.floor((N / 10)) + (N % 10);
    N = (N % 10) * 10 + (sum % 10)
    if (parseInt(input) === N) {
        break
    }
}

console.log(cnt)