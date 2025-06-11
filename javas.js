var i = 0;
var txt = 'Matthew Crane';
var speed = 80;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("mainTitle").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
		}
	}
		
	setTimeout(typeWriter, 350);

function openNav() {
	document.getElementById("menu").style.marginLeft = "0px"
	document.getElementById("close").style.display = "block"
	document.getElementById("bars").style.display = "none"
	document.getElementById("fullcloser").style.display = "block"
}

function closeNav() {
	document.getElementById("menu").style.marginLeft = "-205px"
	document.getElementById("bars").style.display = "block"
	document.getElementById("close").style.display = "none"
	document.getElementById("fullcloser").style.display = "none"
}