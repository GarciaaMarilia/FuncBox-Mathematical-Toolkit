function chooseFunction(
 selectedFunction,
 inputValue,
 secondInputValue = undefined
) {
 switch (selectedFunction) {
  case "verifyPrime":
   return primeNumber(inputValue);
  case "primeFactors":
   return primeFactors(inputValue);
  case "nthFibonacci":
   return fibonacciSequency(inputValue);
  case "gcd":
   if (secondInputValue !== undefined) {
    return greatestCommonDivisor(inputValue, secondInputValue);
   } else {
    return "Second input value is required for 'gcd' function";
   }
  case "removeDuplicatesFromArray":
   return removeDuplicatesFromArray(inputValue);
  default:
   return "No Function";
 }
}

// Mathematical functions
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

function removeDuplicatesFromArray(array) {
 const auxArray = [];

 console.log(array)
 for (const item of array) {
  if (!auxArray.includes(item)) {
   auxArray.push(item);
  }
 }
 return auxArray;
}
// HTML

document
 .getElementById("functionSelect")
 .addEventListener("change", function () {
  const selectedFunction = document.getElementById("functionSelect").value;
  getFunctions(selectedFunction);
 });

function getFunctions(selectedFunction) {
 const inputsDiv = document.getElementById("containerInputs");

 if (selectedFunction === "gcd") {
  inputsDiv.innerHTML = `
    <label for="input">Enter with a number:</label>
    <input type="text" class="form-control" id="input" placeholder="Enter with a number">
    <label for="inputTwo">Enter with a second number:</label>
    <input type="text" class="form-control" id="inputTwo" placeholder="Enter with a second number">
    `;
 } else if (selectedFunction === "removeDuplicatesFromArray") {
  inputsDiv.innerHTML = `
    <label for="input">Enter with an array (numbers must be separated by space):</label>
    <input type="text" class="form-control" id="input" placeholder="Enter with an array">
    `;
 } else {
  inputsDiv.innerHTML = `
  <label for="input">Enter with a number:</label>
  <input type="text" class="form-control" id="input" placeholder="Enter with a number">
  `;
 }
}

document
 .getElementById("performOperationBtn")
 .addEventListener("click", function () {
  const selectedFunction = document.getElementById("functionSelect").value;
  const inputValue = document.getElementById("input").value.trim();
  const secondInputValue =
   selectedFunction === "gcd"
    ? parseInt(document.getElementById("inputTwo").value)
    : undefined;

  let result;

  if (selectedFunction === "removeDuplicatesFromArray") {
   const inputArray = inputValue.split(" ").map(Number);
   result = chooseFunction(selectedFunction, inputArray);
  } else if (selectedFunction === "gcd" && secondInputValue) {
   result = chooseFunction(selectedFunction, inputValue, secondInputValue);
  } else {
   result = chooseFunction(selectedFunction, inputValue);
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
 });
