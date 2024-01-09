function chooseFunction(selectedFunction, inputValue, secondInputValue) {
 switch (selectedFunction) {
  case "verifyPrime":
   return primeNumber(inputValue);
  case "primeFactors":
   return primeFactors(inputValue);
  case "nthFibonacci":
   return fibonacciSequency(inputValue);
  case "gcd":
   return greatestCommonDivisor(inputValue, secondInputValue);
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

function greatestCommonDivisor(a, b) {
 let divisor = 2,
  greatestDivisor = 1;

 if (a < 2 || b < 2) {
  return 1;
 }

 while (a >= divisor && b >= divisor) {
  if (a % divisor === 0 && b % divisor === 0) {
   greatestDivisor = divisor;
  }
  divisor++;
 }

 return greatestDivisor;
}
// HTML

function getFunctions(selectedFunction) {
 const inputsDiv = document.getElementById("containerInputs");

 if (selectedFunction === "gcd") {
  inputsDiv.innerHTML = `
    <label for="inputNumber">Enter with a number:</label>
    <input type="text" class="form-control" id="inputNumber" placeholder="Enter with a number">
    <label for="inputNumber2">Enter with a second number:</label>
    <input type="text" class="form-control" id="inputNumber2" placeholder="Enter with a second number">
    `;
 }
}

document
 .getElementById("functionSelect")
 .addEventListener("change", function () {
  const selectedFunction = document.getElementById("functionSelect").value;
  getFunctions(selectedFunction);
 });

document
 .getElementById("performOperationBtn")
 .addEventListener("click", function () {
  const selectedFunction = document.getElementById("functionSelect").value;
  const inputValue = parseInt(document.getElementById("inputNumber").value);
  const secondInputValue = parseInt(
   document.getElementById("inputNumber2").value
  );

  const result = chooseFunction(selectedFunction, inputValue, secondInputValue);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
 });
