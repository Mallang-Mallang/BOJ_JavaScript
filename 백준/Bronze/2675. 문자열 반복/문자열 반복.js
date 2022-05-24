//백준 입력값 복붙
let userInput = `2
3 ABC
5 /HTP`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
    : userInput.toString().trim().split("\n")

let [T, ...arr] = input;

arr = arr.map((v) => v.trim().split(" "));
let answer = "";

for (let i = 0; i < T; i++) {
  let [R, S] = arr[i];
  for (let j = 0; j < S.length; j++) {
    answer += S[j].repeat(R);
  }
  answer += "\n";
}
console.log(answer.trim());
