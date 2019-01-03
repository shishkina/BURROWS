//Nick and Lynn
'use strict'
let sum = 0;
for (let i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
	  sum += i;
	}
};

//command + ]
console.log(sum)

//TJ and Sam
let threeNum = 0;
let fiveNum = 0;
let x= 1000;
for (let i = 0; i < x; i++) {
  if (i % 3 == 0) {
    threeNum += i;
  } else if (i % 5 == 0) {
    fiveNum += i;
  }
}
console.log(threeNum + fiveNum);

//Larry and Jake
function euler () {
    let sum = 0;
    for (let i=3; i < 1000; i++) {
        if (i % 3 === 0) {
            sum += i;
        } else if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(euler());


