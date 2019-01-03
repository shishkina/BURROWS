
//David's Answer
// const validCard = function(num){
//   let sum = [];
  
//   const numArray = num.toString().split('').map((n) => { 
//     return parseInt(n) 
//   });

//   console.log(numArray)

//   for(let i = numArray.length-2; i >= 0; i-=2){
//     numArray[i] = numArray[i] * 2;
//   }

//   console.log(numArray);
  
//   numArray.map((n) => {
//     n.toString().split('').forEach((e) => {
//       sum.push(parseInt(e));
//     })
//   })

//   const total = sum.reduce((a,b) => { 
//     return a + b 
//   });
  
//   return (total % 10 === 0) ? true : false;
// }

//Wes' Answer
function validCard(num) {
  let ccString = num.toString();
  let ccStringArray = ccString.split('');
  let ccArray = [];
  
  for (num of ccStringArray) {
    num = parseInt(num);
    ccArray.push(num);
  }

  for (let i=ccArray.length-2; i>=0; i=i-2) {
    ccArray[i] = ccArray[i]*2;
  }

  console.log(ccArray);

  let sumArray = []

  ccArray.map((n) => {
    n.toString().split('').forEach((e) => {
      sumArray.push(parseInt(e));
    })
  })

  let sum = sumArray.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum % 10 === 0 ? true : false;
}