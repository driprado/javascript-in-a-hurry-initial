// Navigation Menu
document.querySelector("#open-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.remove("nav-open");
})


// Greeting Section

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

