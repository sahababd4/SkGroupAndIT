    $(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop()>50){
          $("header").removeClass("font_style");
          $("header").addClass("after_scroll");
        }else{
          $("header").removeClass("after_scroll");
          $("header").addClass("font_style");
        }
      });
    });
  $(function() {
      var topoffset = 62; //variable for menu height

      //Use smooth scrolling when clicking on navigation
      $('.navbar-nav a').click(function() {
      if (location.pathname.replace(/^\//,'') === 
        this.pathname.replace(/^\//,'') && 
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
        } //target.length
      } //click function
      }); //smooth scrolling

    });   

  // Go tO Top Button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// contact section design start
// Get the modal
var modal = document.getElementById('id01');
var menu_bar = document.getElementById('header');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        menu_bar.style.display = "none";
    }
}
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        menu_bar.style.display = "none";
    }
}
//open Section
function open_button_buyer(){
  document.getElementById('id01').style.display='block';
  document.getElementById("header").style.display="none";
  document.getElementById("myBtn").style.display="none";
};
function open_button_team(){
  document.getElementById('id02').style.display='block';
  document.getElementById('header').style.display="none";
  document.getElementById("myBtn").style.display="none";
};
// Close the Section
function close_function_buyer(){
  document.getElementById('id01').style.display='none';
  document.getElementById('header').style.display="block";
  document.getElementById('myBtn').style.display="block";
 }
function close_function_team(){
  document.getElementById('id02').style.display='none';
  document.getElementById('header').style.display="block";
  document.getElementById('myBtn').style.display="block";
 }

function nav_toggle() {
  var x = document.getElementById("toggle");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Spy scrolling

(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

