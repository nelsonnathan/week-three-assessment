console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted! Thank you.");
}

function compliment() {
	alert("You found the duck! Way to go!")
}


let form = document.querySelector('form#contact');
let ducky = document.getElementById('ducky')

form.addEventListener('submit', handleSubmit);
ducky.addEventListener('mouseover', compliment)