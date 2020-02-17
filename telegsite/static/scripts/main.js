var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'static/images/1.jpg') {
      myImage.setAttribute ('src','static/images/2.png');
    } else {
      myImage.setAttribute ('src','static/images/1.jpg');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }