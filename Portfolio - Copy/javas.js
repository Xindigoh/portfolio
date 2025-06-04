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
    document.getElementById("mySidenav").style.width = "265px";
	document.getElementById("navitems").style.width = "200px";
	document.getElementById("navclosebar").style.width = "265px";
	document.getElementById("menubutton").style.width = "265px";
	document.getElementById("menubutton").style.textAlign = "right";
	document.getElementById("menubutton").style.color = "#333333";
	/*/document.getElementById("mySidenav").style.transition = "0s"/*/
  }
  
/*/<button onclick="setTimeout(myFunction, 3000);">Try it</button>/*/

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
	document.getElementById("navitems").style.width = "0px";
	document.getElementById("navclosebar").style.width = "0px";
	document.getElementById("menubutton").style.width = "70px";
	document.getElementById("menubutton").style.textAlign = "left";
	document.getElementById("menubutton").style.color = "#f2f2f2";
	/*/document.getElementById("mySidenav").style.transition = "0.2s"/*/
  }