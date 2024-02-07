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
  case "mergeSortedArrays":
   return mergeSortedArrays(inputValue, secondInputValue);
  case "swapWithoutTemp":
   return swapWithoutTemp(inputValue, secondInputValue);
  case "reverseString":
   return reverseString(inputValue);
  case "verifyPalindrome":
   return verifyPalindrome(inputValue);
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

 for (const item of array) {
  if (!auxArray.includes(item)) {
   auxArray.push(item);
  }
 }
 return auxArray;
}

function mergeSortedArrays(arrayOne, arrayTwo) {
 const mergedArray = [...arrayOne, ...arrayTwo];

 const arraySorted = mergedArray.sort((a, b) => a - b);

 return arraySorted;
}

function swapWithoutTemp(a, b) {
 let numberA = Number(a);
 let numberB = Number(b);

 const beforeSwap = `before swap: a: ${numberA} b: ${numberB}`;

 numberB = numberB - numberA;
 numberA = numberA + numberB;
 numberB = numberA - numberB;

 const afterSwap = `after swap: a: ${numberA} b: ${numberB}`;

 return `${beforeSwap} ${afterSwap}`;
}

function reverseString(str) {
 let rvStr = "";
 for (let i = str.length - 1; i >= 0; i--) {
  rvStr += str[i];
 }
 return rvStr;
}

function verifyPalindrome(str) {
 let reversedString = reverseString(str);

 if (str == reversedString) {
  return "It's a palindrome";
 } else {
  return "It's not a palindrome";
 }
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

 if (selectedFunction === "mergeSortedArrays") {
  inputsDiv.innerHTML = `
    <label for="input">Enter with an array (numbers must be separated by space):</label>
    <input type="text" class="form-control" id="input" placeholder="Enter with an array">
    <label for="inputTwo">Enter with an array (numbers must be separated by space):</label>
    <input type="text" class="form-control" id="inputTwo" placeholder="Enter with an array">
    `;
 } else if (
  selectedFunction === "gcd" ||
  selectedFunction === "swapWithoutTemp"
 ) {
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
 } else if (
  selectedFunction === "reverseString" ||
  selectedFunction === "verifyPalindrome"
 ) {
  inputsDiv.innerHTML = `
    <label for="input">Enter with a string:</label>
    <input type="text" class="form-control" id="input" placeholder="Enter with a string">
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
   selectedFunction === "gcd" ||
   selectedFunction === "mergeSortedArrays" ||
   selectedFunction === "swapWithoutTemp"
    ? String(document.getElementById("inputTwo").value.trim())
    : undefined;

  let result;
  if (selectedFunction === "mergeSortedArrays") {
   const inputArray = inputValue.split(" ").map(Number);
   const inputSecondArray = secondInputValue.split(" ").map(Number);
   result = chooseFunction(selectedFunction, inputArray, inputSecondArray);
  } else if (selectedFunction === "removeDuplicatesFromArray") {
   const inputArray = inputValue.split(" ").map(Number);
   result = chooseFunction(selectedFunction, inputArray);
  } else if (
   (selectedFunction === "gcd" || selectedFunction === "swapWithoutTemp") &&
   secondInputValue
  ) {
   result = chooseFunction(selectedFunction, inputValue, secondInputValue);
  } else {
   result = chooseFunction(selectedFunction, inputValue);
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
 });
