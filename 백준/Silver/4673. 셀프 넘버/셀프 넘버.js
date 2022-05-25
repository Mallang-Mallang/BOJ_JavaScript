let answer = "";

function d(n) {
  let current = n;
  let sum = 0;

  for (let i = 0; i < String(n).length; i++) {
    sum += current % 10;
    current = Math.floor(current / 10);
  }
  return n + sum;
}

let selfNumber = Array(10000 + 1).fill(true);

for (let i = 0; i < 10000; i++) {
  selfNumber[d(i)] = false;
}

for (i = 0; i < 10000; i++) {
  if (selfNumber[i]) {
    answer += i + "\n";
  }
}

console.log(answer);
