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

function test() {
	document.getElementById("test").style.width = "200px"
}