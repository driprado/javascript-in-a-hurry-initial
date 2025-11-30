// Greeting Section

const greetingText = "Good morning!"
const weatherCondition = "Sunny"
const userLocation = "New York"
let temperature = "22.8673"
// ${temperature.toFixed(1)} round to one decimal place
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("#weather").innerHTML = weatherText