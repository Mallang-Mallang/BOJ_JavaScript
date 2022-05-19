//백준 입력값 복붙
let userInput = `23 48
25`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let [A, [B]] = input.split("\n").map((v) => v.split(" ").map(Number));
[hour, min] = A;

if (min + B > 60) {
  hour += parseInt((min + B) / 60);
  min = (min + B) % 60;
} else if (min + B == 60) {
  hour += 1;
  min = 0;
} else if (min + B < 60) {
  min += B;
}
if (hour == 24) {
  hour = 0;
} else if (hour > 24) {
  hour -= 24
}

console.log(hour, min);
