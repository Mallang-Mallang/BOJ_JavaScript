//백준 입력값 복붙
let userInput = `baekjoon`;
// 백준서버에서 입력값 받아오는 부분    전처리 X
let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : userInput;

let answer = [];

  for (let j = 97; j <= 122; j++) {
    if (input.includes(String.fromCharCode(j))) {
      answer.push(input.indexOf(String.fromCharCode(j)));
    }else {
      answer.push(-1);
    }
  }


console.log(answer.join(" "));
