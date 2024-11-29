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
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

window.onscroll = function() {minNavbar()};
  function minNavbar() {
    var navbar = document.getElementById("topNav");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "d-none " + "d-sm-none " + "d-xs-none " + "d-md-flex " + "min-navbar " + "sticky-top " + "position-fixed " + "w100";
    } else {
        navbar.className = navbar.className.replace("min-navbar", "");
    }
}