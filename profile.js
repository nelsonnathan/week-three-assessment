function favColor(){
    alert("Navy Blue")
}

function favPlace(){
    alert("Seattle, Washington")
}

function favRitual(){
    alert("Working out")
}

let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)