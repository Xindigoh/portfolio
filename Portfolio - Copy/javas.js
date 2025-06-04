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
}