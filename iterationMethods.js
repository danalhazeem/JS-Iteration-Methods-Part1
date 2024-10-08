const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const newArray = numbers.filter((number) => number >= 25);
console.log(newArray);

const divisibleByFive = numbers.filter((number) => number % 5 == 0);
console.log(divisibleByFive);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const squares = numbers.map(function (number) {
  return number * number;
});

console.log(squares);

const multipli = numbers.map(function (number) {
  return number * 2;
});

console.log(multipli);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const greaterThanOr = numbers.filter((number) => number >= 20);
const squaresgreaterThanOr = greaterThanOr.map(function (number) {
  return number * number;
});
console.log(greaterThanOr);
console.log(squaresgreaterThanOr);

const multipliBythree = divisibleByFive.map(function (number) {
  return number * 3;
});
console.log(multipliBythree);

/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
numbers.forEach((element) => {
  console.log(element);
});

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const fahrenheint = [20, 50, 100];

const toCelsius = (temperatures) => {
  return temperatures.map((temp) => (temp - 32) * (5 / 9));
};

console.log(toCelsius(fahrenheint));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
// const temperatures = [70, 85, 90, 65, 100, 75];
// const threshold = 80;
// const hottestDays = temperatures.filter((temp) => temp < threshold);
// console.log(hottestDays);
const hottestDays = (temperatures, threshhold) => {
  return temperatures.filter((temp) => temp < threshhold);
};
console.log(hottestDays([70, 85, 90, 65, 100, 75], 80));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

const hottestDaysInfahrenheint = (temperatures, threshhold) => {
  return temperatures.filter((temp) => temp < threshhold);
};
const temperatures = (temp) => {
  return temperatures.map((temps) => (temp - 32) * (5 / 9));
};
console.log(
  hottestDays([70, 85, 90, 65, 100, 75], 80).map(
    (temps) => (temps - 32) * (5 / 9)
  )
);
