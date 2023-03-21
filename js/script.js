function divide(number1, number2) {
  return number1 / number2  
}

function multiply(number1, number2) {
  return number1 * number2
}
function add(number1, number2) {
  return number1 + number2
}
function subtract(number1, number2) {
  return number1 - number2
}
//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

answer1 = (divide(number1, number2));

window.alert (number1 + "/" + number2 + "=" + answer1)

answer2 = (multiply(number1, number2));

window.alert (number1 + "*" + number2 + "=" + answer2);

answer3 = (add(number1, number2));

window.alert (number1 + "+" + number2 + "=" + answer3);

answer4 = (subtract(number1, number2));

window.alert (number1 + "-" + number2 + "=" + answer4)

