let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sea.jpg'){
        myImage.setAttribute('src', 'images/sunset.jpg');
    } else {
        myImage.setAttribute('src', 'images/sea.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Welcome to my webpage, " + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome to my webpage again, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}