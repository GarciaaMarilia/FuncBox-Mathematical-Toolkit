function chooseFunction(selectedFunction, inputValue) {
 switch (selectedFunction) {
  case "verifyPrime":
   return primeNumber(inputValue);
  case "primeFactors":
   return primeFactors(inputValue);
  case "nthFibonacci":
   return fibonacciSequency(inputValue);
  default:
   return "No Function";
 }
}

function primeNumber(number) {
 let divisor = 2;
 while (number > divisor) {
  if (number % divisor === 0) {
   return `${number} não é primo`;
  } else {
   divisor++;
  }
 }
 return `${number} é primo`;
}

function primeFactors(number) {
 let factors = [],
  divisor = 2;

 while (number > 2) {
  if (number % divisor == 0) {
   factors.push(divisor);
   number = number / divisor;
  } else {
   divisor++;
  }
 }
 return `Os fatores primos são ${String(factors).split(", ")}`;
}

function fibonacciSequency(number) {
 if (number <= 1) {
  return number;
 } else {
  return fibonacciSequency(number - 1) + fibonacciSequency(number - 2);
 }
}
// HTML

document
 .getElementById("performOperationBtn")
 .addEventListener("click", function () {
  const selectedFunction = document.getElementById("functionSelect").value;
  const inputValue = parseInt(document.getElementById("inputNumber").value);

  const result = chooseFunction(selectedFunction, inputValue);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
 });
