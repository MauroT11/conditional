let speed = 60;
let speedLimit = 70;

if (speed < speedLimit) {
    console.log("You are driving under the speed limit")
} else if (speed == speedLimit) {
    console.log("You are driving at the speed limit")
} else {
    console.log("You are driving over the speed limit")
}

const body = document.querySelector('body')

const colorBtn = document.getElementById('ranBtn')

function changeColor() {
    if (document.body.style.background == 'lightsteelblue') {
        document.body.style.background = 'gray';
    } else {
        document.body.style.background = 'lightsteelblue';
    }
}

colorBtn.addEventListener('click', changeColor);