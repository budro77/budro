var myImage = document.querySelector('img');

myImage.onclick = function(){
	var myScr = myImage.getAttribute('src');
		if(myScr==='images/firefox-icon.png'){
			myImage.setAttribute('src','images/7113323.jpg');
		}
		else {
			myImage.setAttribute('src','images/firefox-icon.png');
		}}
		
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	
	var myName = prompt('Please enter your name.');
	localStorage.setItem ('name',myName);
	myHeading.innerHTML = 'Ytllo' + myName;
	}
	
	if(!localStorage.getItem('name')){
		
		setUserName();
	}else{
		var storageName = localStorage.getItem('name');
		myHeading.innerHTML = 'Hello' + storageName;
	}
	
	myButton.onclick = function(){setUserName()};
	