//JAKES SOLUTION

// function eulerSix(num) {
//  let sumsquares = 0;
//  let squaresum = 0;
//  for(let i=1; i<=num; i++) {
//    squaresum += i;
//    let square = Math.pow(i,2);
//    sumsquares += square;
//  }
//  squaresum = Math.pow(squaresum, 2);
//  return squaresum - sumsquares;
// }

//NICKS SOLUTION

// function sumOfSquares(number) {
// 	 let sumSquares= (number*(number+1)*(2*number+1))/6;
// 	 return sumSquares;
//  }

//  function squareOfSums(number) {
//    let sumNumbers=(number*(number+1))/2;
//    return (Math.pow(sumNumbers,2));
//  }

//  function differenceBetweenUs() {
//  	alert("Required difference is "+(squareOfSums(100)-sumOfSquares(100)));
//  }

//TJS SOLUTION
// function eulerSix() {
// 	let squaredArray = [];
// 	let sumArray = [];
//   for(let i = 0; i < 101; i++) {
//   	let squared = i * i;
//     let summed = i += 1;
//     sumArray.push(summed)
//   	squaredArray.push(squared);
//   }
//   let reducedSquare = squaredArray.reduce(function(total,num){total + num},0);
//   let reducedSum = sumArray.reduce(function(total,num){total + num},0);
//   let squaredReduced = reducedSum * reducedSum;
//   return squaredReduced - reducedSquare;
// };

//WES SOLUTION

// function squareOfSums(num) {
//   let array = [];
//   for (let i=0; i<=num; i++) {
//     array.push(i);
//   };
//   let sum = array.reduce(function(total, num) {return total+num;});
//   return sum*sum;
// }

// function sumOfSquares(num) {
//   let array = [];
//   for (let i=0; i<=num; i++) {
//     array.push(i);
//   };
//   let sum = array.reduce(function(total, num) {return total+(num*num);});
//   return sum;
// }

// let difference = squareOfSums(100) - sumOfSquares(100);

// WILLS SOLUTIONS

function eulerSix(limit) {
	let sum = 0;
	let sumOfSq = 0;
	for(let i = 0; i <= limit; i++){
		sum += i;
		sumOfSq += Math.pow(i, 2);
	}
	return Math.pow(sum, 2) - sumOfSq;
};

// function eulerSix(limit) {
// 	let sqOfSum = Math.pow(limit * (limit + 1) / 2, 2);
// 	let sumOfSq = ( 2 * limit + 1) * (limit + 1) * limit / 6;
// 	return sqOfSum - sumOfSq;
// }