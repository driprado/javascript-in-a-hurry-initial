// navigation Menu
document.querySelector("#open-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.remove("nav-open");
})


// greeting Section

function celciusToFahr(temperature){
	let fahr = (temperature * 9/5) + 32;
	return fahr;
}

celciusToFahr(25)

const greetingText = "Good morning!"
const weatherCondition = "Sunny"
const userLocation = "New York"
let temperature = "22.8673"
// ${temperature.toFixed(1)} round to one decimal place
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${Number(temperature).toFixed(1)}°C outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celciusToFahr(temperature).toFixed(1)}°F outside.`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("#weather").innerHTML = celsiusText


// weather switch
document.querySelector(".weather-group").addEventListener("click", function name(event) {

	if (event.target.id == "celsius") {
		document.querySelector("#weather").innerHTML = celsiusText;
	} else {
		document.querySelector("#weather").innerHTML = fahrText;
	}

});


// date

// local date and time
// let localTime = new Date();

// Date() methods:
// .getHours()
// .getMinutes()
// .getSeconds() 

// find these via queryselector:
// <span data-time="hours" class="time-number">08</span>
// <span data-time="minutes" class="time-number">25</span>
// <span data-time="seconds" class="time-number">13</span>

// document.querySelector('span[data-time="hours"]').textContent = localTime.getHours();
// document.querySelector('span[data-time="minutes"]').textContent = localTime.getMinutes();
// document.querySelector('span[data-time="second"]').textContent = localTime.getSeconds();

// setInterval builtin function
// repeatedly executes a function at specified time intervals (in milliseconds) until cleared.
// used to "refresh" Date() every second, so we get an updated time continuously

// setInterval(() => {
// 	let localTime = new Date();
// 	document.querySelector('span[data-time="hours"]').textContent = localTime.getHours();
// 	document.querySelector('span[data-time="minutes"]').textContent = localTime.getMinutes();
// 	document.querySelector('span[data-time="seconds"]').textContent = localTime.getSeconds();
// }, 1000);

// add 0 to the let of single digit timestamps 1-9
// padStart
// pads a string to a specified length by adding characters (like "0") to the beginning until it reaches that length.
// if string already have desired number of characters it does nothing.
// Syntax: string.padStart(lengh, string)
// lengh: Desired final length of the string
// string: Character(s) to add at the start (default is space)

setInterval(() => {
	let localTime = new Date();
	document.querySelector('span[data-time="hours"]').textContent = localTime.getHours().toString().padStart(2,"0");
	document.querySelector('span[data-time="minutes"]').textContent = localTime.getMinutes().toString().padStart(2,"0");
	document.querySelector('span[data-time="seconds"]').textContent = localTime.getSeconds().toString().padStart(2,"0");
}, 1000);