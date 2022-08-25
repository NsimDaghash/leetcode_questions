function main(numOfProducts, N) {
  // Write your code here
  let count = 0,
    result = 0;
  N = N.split(" ");
  console.log(N);
  for (let i = 0; i < numOfProducts - 1; i++) {
    if (
      N[i] == "a" ||
      N[i] == "i" ||
      N[i] == "e" ||
      N[i] == "o" ||
      N[i] == "u" ||
      N[i] == "A" ||
      N[i] == "I" ||
      N[i] == "E" ||
      N[i] == "O" ||
      N[i] == "U"
    ) {
      console.log(N[i]);
      count += 1;
      console.log(count);
    }
  }
  result = numOfProducts - count;
  console.log(result);
  return result;
}

let N = "s d h a j m e k p",
  numOfProducts = 9;
console.log(main(numOfProducts, N));
