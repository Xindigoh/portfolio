function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.boxShadow = "0px 0px 20px -1px black";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.boxShadow = "0px 0px 0px 0px black";
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