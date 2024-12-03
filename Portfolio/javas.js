var i = 0;
var txt = 'Matthew Crane';
var speed = 80;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("maintitle").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
		}
	}
		
	setTimeout(typeWriter, 350);

function openNav() {
    document.getElementById("mySidenav").style.width = "265px";
	document.getElementById("menubutton").style.width = "265px";
	document.getElementById("menubutton").style.textAlign = "right";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("menubutton").style.width = "70px";
	document.getElementById("menubutton").style.textAlign = "left";
  }