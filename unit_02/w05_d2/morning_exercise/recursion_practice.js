function countdown(num) {
	
//1.  Come up with exit condition
	if(num === 1) {
		return num;
	}

//2. Do something
num -= 1;

// console.log(num);

//3. Call the function from within itself
return countdown(num);

}

// console.log(countdown(1000));

function countdown(num) {
	if(num === 1) {
		return num
	}

	return countdown(num - 1);

}

//Tom's Answer
// let fact = 1;
// function factorial(num) {
//   fact *= num;
//   num -= 1;
//   if(num === 1) {
//     return fact;
//   }
//     return factorial(num);
// }
// console.log(factorial(4));

//Erik's Answer
// function fac (num, product = 1) {
//   if (num === 1) {
//     return product;
//   }
//   product *= num;
//   return fac(num - 1, product);
// }

// console.log(fac(4));

// console.log(`fac(5) === 120: ${fac(5) === 120} (${fac(5)})`);

//WES' ANSWER
// let fact = 1;
// function factorial(num) {
//   if (num === 1) {
//     return fact;
//   };

//   fact*=num;
//   num -=1;

//   return factorial(num);
// }

//Param num is a number
//Param product is number
function fac(num, product){

	if(num === 1){
		return product;
	}
	
	product = num * product;

	console.log(num);

	return fac(num - 1, product);

}

console.log(fac(5,1));
