var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/raf.jpg') {
      myImage.setAttribute ('src','images/raf2.jpg');
    } else {
      myImage.setAttribute ('src','images/raf.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hi, " + myName + "! I'm Raf and I really miss my owner Max...";
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Hi, " + storedName + "! I'm Raf and I really miss my owner Max...";
  }
myButton.onclick = function() {
    setUserName();
  }   