$(function(){
  clock();
});

function clock() {
	let $minuteHand = $('#minute-hand');
	let $hourHand = $('#hour-hand');
	let $secondHand = $('#second-hand');

  let secondDegree = 0;
  let minuteDegree = 0;
	let hourDegree = 0;

  function rotateSecondHand(degree) {
			$secondHand.css({transform: "rotate(" + degree + "deg)"});
  }

  function rotateMinuteHand(degree){
		$minuteHand.css({transform: "rotate(" + degree + "deg)"});
  }

  function rotateHourHand(degree) {
		$hourHand.css({transform: "rotate(" + degree + "deg)"});
  }

	setInterval(() => {
		rotateSecondHand(secondDegree+=6);
	}, 1000);

	setInterval(() => {
		rotateMinuteHand(minuteDegree+=6);
	}, 60000);
	
	setInterval(() => {
		rotateHourHand(hourDegree+=.5);
	}, 60000);
};

// function clock() {
//   let minuteHand = document.querySelector('#minute-hand');
//   let secondHand = document.querySelector('#second-hand');
//   let hourHand = document.querySelector('#hour-hand');
//   let secondCount = 6;
//   let minuteCount = 0.1;
//   let hourCount = 0.0083;
//   setInterval(() => {
//     secondHand.style.transform = `rotate(${secondCount}deg)`
//     minuteHand.style.transform = `rotate(${minuteCount}deg)`
//     hourHand.style.transform = `rotate(${hourCount}deg)`
//     secondCount += 6;
//     minuteCount += 0.1;
//     hourCount += 0.0083;
//   }, 1000)
// }


// function tick( { element, increment, everyNthSecond }) {
//   let degrees = 0;
//   const moveHand = setInterval(() => {
//     element.style.transform = `rotate(${degrees += increment}deg)`;
//   }, (everyNthSecond * 1000));
// }

// function clock() {

//   const secondHand = document.querySelector('#second-hand');
//   tick({
//     element: secondHand,
//     increment: 6,
//     everyNthSecond: 1,
//   });

//   const minuteHand = document.querySelector('#minute-hand');
//   tick({
//     element: minuteHand,
//     increment: 6,
//     everyNthSecond: 60,
//   });

//   const hourHand = document.querySelector('#hour-hand');
//   tick({
//     element: hourHand,
//     increment: 0.5,
//     everyNthSecond: 60,
//   });

// }

// function clock() {
//   let secondHand = document.getElementById("second-hand");
//   let minuteHand = document.getElementById("minute-hand");
//   let hourHand = document.getElementById("hour-hand");
//   let deg = 6;
//   let mdeg = prompt('what minute is it right now')*6;
//   let hdeg = prompt('what hour is it(base 12)?')*6;
//   minuteHand.style.transform = `rotate(${mdeg}deg)`;
//   hourHand.style.transform = `rotate(${hdeg}deg)`;
//   setInterval(() => {
//     console.log(deg);
//     secondHand.style.transform = `rotate(${deg}deg)`;
//     deg+=6;
//     while(deg == 360) {
//       mdeg += 6;
//       minuteHand.style.transform = `rotate(${mdeg}deg)`;
//       deg = 0;
//     }
//     while(mdeg == 360) {
//       hdeg += 6;
//       hourHand.style.transform = `rotate(${hdeg}deg)`;
//       mdeg = 0;
//     }
//   }, 1000)


// }

// function clock() {
//   let today = new Date();
//   let second = document.querySelector('#second-hand');
//   let minute = document.querySelector('#minute-hand');
//   let hour = document.querySelector('#hour-hand');
//   let secs = today.getSeconds() * 6;
//   let mins = today.getMinutes() * 6;
//   let hrs = today.getHours() * 30;
//   second.innerHTML='';
//   second.style.transform=`rotate(${secs}deg)`;
//   minute.innerHTML='';
//   minute.style.transform=`rotate(${mins}deg)`;
//   hour.innerHTML='';
//   hour.style.transform=`rotate(${hrs}deg)`;
// }






















