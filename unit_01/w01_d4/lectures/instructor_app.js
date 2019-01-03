// Anatomy of a for loop
// for(placeholder; conditional; incrementor) {
// 	doSomething here;
// }

// const names = ['tyler', 'nayana', 'andy', 'adrian', 'nick', 'jesse', 'james']
// repetative && annoying
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// STANDARD FOR LOOP

// for(let i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

// FOR IN LOOP

// for(i in names) {
// 	console.log(names[i]);
// }

// FOR OF LOOP

// for(let person of names) {
// 	console.log(person)
// }

// Write a loop that prints all of the odd numbers between 0 and 100

// for (let i = 1; i < 100; i = i + 2) {
// 	console.log(i);
// }

//WHILE LOOP

// let i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++
// }


// FUNCTIONS
// coolFunc();

// const myFunc = function() {
// 	console.log("MY FUNC")
// };

// myFunc();

// function coolFunc() {
// 	console.log("COOL FUNC");
// };

// coolFunc();

// function combineWords(firstWord, secondWord) {
// 	const combination = `${firstWord} ${secondWord}`;
// 	return combination;
// };

//Write a function sumOfThree that will accept 3 arguments, and return the sum

// Write a function productOfThree that will accept 3 arguments and return the product

// function sumOfThree(a,b,c) {
// 	const sum = a + b + c
// 	return sum
// }

// console.log(sumOfThree(2,3,4))

// function productOfThree(num1, num2, num3) {
// 	const product = num1 * num2 * num3;
// 	return product;
// }

// console.log(productOfThree(4, 5, 6));


// const myScores = [3,4,5,6,7]
// const jimsScores = [2,3,4,5,6,10]
// const flandersScores = [2,34,7,8,3,6]

// NOT DRY // INEFFICENT // MOIST

// let myScore = 0;
// for(let i = 0; i < myScores.length; i++) {
// 	myScore += myScores[i]
// }

// let jimsScore = 0;
// for(let i = 0; i < jimsScores.length; i++) {
// 	jimsScore += jimsScores[i]
// }

// let flanderScore = 0;
// for(let i = 0; i < flandersScores.length; i++) {
// 	flanderScore += flandersScores[i]
// }

// DRY

// function total(arr) {
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++){
// 		sum += arr[i];
// 	}
// 	return sum;
// }

// let myScore = total(myScores);
// let jimsScore = total(jimsScores);
// let flanderScore = total(flandersScores);

// You can pass as many arguments as you would like, unless they are being used they do nothing!!!

// function poop(arg1, arg2) {
// 	console.log(`this is arg ${arg1}`);
// 	console.log(`this is arg ${arg2}`);
// }

// function letsCallThis() {
// 	return "Cool you called me!!";
// };

// let newFunction = function letsCallThis(){
// 	return "Cool you called me!!";
// };

// SCOPE IN PRACTICE

// let x = "this is x";

// function testingX() {
// 	let y = "this is y";
// 	console.log(x)
// }
// testingX();

// const isTrue = true

// if(isTrue) {
// 	let isTrue = "YAYYYYY"
// 	console.log(isTrue)
// }

// * Write a function called `bigOrSmall` that accepts one argument, a number, and returns "This number is big" if the number is greater than 10, and "This number is small" otherwise

// function bigOrSmall(num){
// 	if(num > 10) {
// 		return "This number is big";
// 	} else {
// 		return "This number is small";
// 	}
// };

// // * Write a function called `oddOrEven` that accepts one argument, a number, and returns "This number is odd" if the number is odd, and "This number is even" if the number is even

// function oddOrEven(num) {
// 	if(num % 2 === 0) {
// 		return "This number is even";
// 	} else {
// 		return "This number is odd";
// 	}
// };

// // * Write a function called `embiggen` that accepts one argument, a string, and returns a CAPS LOCKED version of the string with an exclamation at the end

// function embiggen(string) {
// 	return `${string.toUpperCase()}!`
// 	// return string.toUpperCase() + "!";
// };

// // * Write a function called `reverser` that accepts one argument, a string, and returns a reversed version of the string

// function reverser(string) {
// 	// return string.split('').reverse().join('');
// 	let stringArray = string.split('');
// 	let reversedArray = stringArray.reverse();
// 	let reversedString = reversedArray.join('')
// 	return reversedString;
// };


// ### Pounds to Kilograms

// How would you convert 120lbs to kilograms?

// ### Kilograms to Pounds

// How would you convert 80 kilograms to pounds?

// ### Killer Caffeine

// It's estimated that 6 grams per hundred pounds of body weight can cause death! Given an 8oz cup of coffee has 95mg of caffeine, calculate how many cups it takes to kill YOU.


// ### Old Modems

// How long would it take to download a 25GB ripped copy of Blade Runner over a $200 56k/s modem from 1995?

// ### A Long Long Long time

// If you drove from Portland, Maine to Portland, Oregon at a steady 55 miles per hour, how many times could you listen to the Beatle's White Album in full?


// ### How much would it cost to drive around the world at the equator?
// Assuming gas costs $2.675 and you drive at a steady 55 mph.

// const names = ['tyler', 'nayana', 'andy', 'adrian', 'nick', 'jesse', 'james']

// // forEach iterates and performs the block on the item, returns the original array

// names.forEach(function(name) {
// 	console.log(name.toUpperCase());
// })

// // map performs the block on the item, puts it in a new array and returns the new array, leaving the original array intact

// let newNames = names.map(function(name) {
// 	return name.toUpperCase();
// });