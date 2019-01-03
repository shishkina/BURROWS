Types:
	⁃	undefined vs null?      [... did you set it?]

```js
// undefined... because I didn't define it
let banana;
const apple;  

// I DEFINED this... as something that doesn't yet have a meaningful value
const futureChildName = null;
```



Scope:
	-	ALL OF IT!!     [ const, let, var]
  - Hoisting:   when something will live later... the program knows

```js

// THis is a block:
{
  // The squiggle things... create a block...
}

// const and let... are scoped (meaning live within) a block

{  
  // sad thing only lives... in this sad sad block
  let sadThing;    
}
// we ain't sad out here


// In the past...
var x = 1;
function () {
  var y = 3;
}

var numberArray = [1, 2, 3];
for (var i = 0; i < numberArray.length; i++) {
}
console.log(i); // i has the value 3


const numberArray = [1, 2, 3];
for (let i = 0; i < numberArray.length; i++) {
    // i only lives in here
}
// i is not a thing... undefined


```



```js
// let vs const

// let:  Allow for future reasignement
let thingInMyHand = 'phone';
thingInMyHand = 'spray bottle';

// const:  no new reasignement... but manipulation is ok
const lich = {
  name: 'Lichard DeGray',
};
lich.name = 'Lich DeGray';

```


Loops:
	⁃	the different kinds of for loops?                  [how can you communicate your intention best?]
	⁃	specifically which is best to use when?
	⁃	for in and for of loops
  - slice method on arrays:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

```js
const people = ['Lichard DeGray', 'Kathew Bod', 'Omily', 'Joy'];
for (let person of people){
  console.log( person );
}

const people2 = ['Lichard DeGray', 'Kathew Bod', 'Omily', 'Joy'];
for (let personIndex in people2){
  console.log( people2[personIndex] );
}



const people = ['Lichard DeGray', 'Kathew Bod', 'Omily', 'Joy'];

const greatPeople = people.map(function(person){
	return person + ' the great';
});

// Why did I use map?
	//  I want to go through each element in the Array
	//  construct a new array based on the function

console.log(greatPeople);
```

// map vs forEach

const people = ['Lichard DeGray', 'Kathew Bod', 'Omily', 'Joy'];

people.forEach(function(person){
	console.log(person + ' the great');
});

// When would I use a for each
		// I don't need a new array...
		// just want behavior for each element




Functions:
	⁃	referencing vs calling        [a function is a football...]
	⁃	anonymous function           [it can have a name attribute... or not!]
	⁃	fat arrows		         			[block scoped functions!]
 	⁃	parameters?!		  	       [does the behavior need stuff to be completed?]


```js  
// Needs parameters to work!
  function calcutlateTips(bill, tipPercent) {
  	const tip = bill * (tipPercent/100);
  	return tip;
  }

// Doesn't need parameters to work!
  function promptUserForName() {
  	return prompt('What is your name?');
  }


const people = ['Lichard', 'Kathew', 'Omily'];

const greatFriends = people.map( function(name) {
	return name + ' the great';
});

const greatFriends02 = people.map( (name) => {
	return name + ' the great';
});

```





Command Line
	⁃	relative vs absolute paths   	[does where I am right now matter?]
```sh
# Absolute:  Doesn't matter where I current am
cd ~/src/WDI_NYC_BURROW/unit_01/w01_d5/lectures

# Relative:  Starting with where I am right now
cd ./unit_01/w01_d5/lectures
```


ES6 stuff
	⁃	string concatenation  & interpolation   		[`So cooooool! This is like turning JS to ${ level }`]
```js
const firstname = 'Lichard';
const lastname = 'DeGray';
const fullName = `${ firstname } is my first name... ${ lastname } is my last name`;
```

Truth/Falsely
	⁃	What?!!?!  Why?!?!    		[Javascript... is a language... outside of computers... just like happy and sad words...]


### MD Files
	⁃	What are they for?			[Why not?! Another file type!   Who knows?!  Weeeeeee!!!]

GIT
	⁃	Issues?						[This is our pattern...  It will simply take some time to get use to.]
	⁃	HW submission


"... and then... Andrew... what was this Abstraction nonsense about again?!  Ahhhhh!!!!!!!  ARGH!!! "
