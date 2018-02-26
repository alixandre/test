/****************************/
/**  Side navigation menu  **/
/****************************/

function ouverture(x) {
    x.classList.toggle("rotate");
		document.getElementById("menu").style.width = "500px";
		x.classList.toggle("rotate");
}

/* Remise à 0 de la largeur du menu */
function closeNav() {
    document.getElementById("menu").style.width = "0";
}

/**************/
/**  Slider  **/
/**************/
$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 1300,
});
/*********************/
/*  section musique  */
/********************/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
