//백준 입력값 복붙
let userInput = `100`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let N = parseInt(input);

if (N >= 90) {
  console.log("A");
}else if (N >= 80) {
  console.log("B");
}else if (N >= 70) {
  console.log("C");
}else if (N >= 60) {
  console.log("D");
}else {
  console.log("F");
}