
//Steve Solution, partial
// var sHand;
// var mHand;
// var hHand;

// var seconds = 0;
// var minutes = 0;
// var hours = 0;

// function secondRotation(seconds) {
// 	return (seconds / 60) * 360
// }

// function minuteRotation(minutes, seconds) {
// 	var wholeMinutes = (minutes / 60) *360;
// 	var subMinutes = (seconds / 3600) * 360;
// 	return wholeMinutes + subMinutes;
// }

// function tick() {
// 	seconds++;
// 	if (seconds === 60) {
// 		minutes++;
// 		seconds = 0;
// 	}
// }

// sHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";





//My various trials===============================



// var degrees = 45;
// var minuteDegrees = ;
// var secondDegrees =  ;
// var hourDegrees = ;

// var seconds = 0;
// var minutes = 0;
// var hours = 0;

// var secEl = document.querySelector('#second');


// var secondRotation = function() { // In this case do not include a parameter because I'm calling the global variable in the function
//     var secDegrees = (seconds/60) * 360;
//     secEl.transform = "rotate(" + secDegrees + "deg)";
//     seconds++; //if statement check if greater than 60
//     if (seconds >= 60) {
//         seconds = 0;
//     }
// };

// setInterval(secondRotation, 200);


var secondHand = document.querySelector('#second');
var seconds = 0; 

function secondRotation() {
	seconds = seconds + 1;
	var degrees = seconds/60 * 360;
	secondHand.style.transform = "rotate(" + degrees + "deg)";
	if (seconds === 60) {
		seconds = 0;
	}
};
setInterval(secondRotation, 5);



//===========================

// function rotate() {
// var el = document.querySelector("#hour");
// el.style.transform = "rotate(" + degrees + "deg)"; 
// }
// //change el to general
// // seconds=seconds +1 var secondDegrees = seconds/60*360
// //secondDegress.style.transform=rotate(" + secondsDegrees + deg")


// var el = document.querySelector("#minute");
// el.style.transform = "rotate(" + degrees + "deg)";

// var el = document.querySelector("#second");
// el.style.transform = "rotate(" + degrees + "deg)";





// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// //Calculate .1.style.transform is degrees for seconds

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

/*

var intervalHandle = setInterval(function() {
	console.log();
  }, 1000);


var el = document.getElementById("myElement");
el.style.transform = "rotate(" + degrees + "deg)";

*/