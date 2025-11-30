document.querySelector("#open-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.add("nav-open");
})

document.querySelector("#close-nav-menu").addEventListener("click", function name(params) {
	document.querySelector("header nav .wrapper").classList.remove("nav-open");
})

// var keywork creates a global variable
var customer = "Jane";
console.log("Hello " + customer)

// let keywork creates a local variable
let client = "Joe";
console.log("Heya " + client) ;

// const keyword creates a local constant variable
const buyer = "John"
console.log("Howdy " + buyer);