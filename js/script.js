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
const number2 = parseInt(prompt("Enter another number"));

answer1 = (divide(number1, number2));
 
window.alert ("dividing them give us " + answer1 + ".");

answer2 = (multiply(number1, number2));

window.alert ("when we multply them the answer is " + answer2);

answer3 = (add(number1, number2));

window.alert = ("when added we get " + answer3);

answer4 = (subtract(number1, number2));

window.alert = ("subrtacting them results in " + answer4)