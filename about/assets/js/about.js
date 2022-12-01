AOS.init(); // animate on scroll
// counter
new PureCounter({
    selector: ".purecounter",
    separator: true,
     // decimals: 1, 
});


// back to top

const arrow = document.getElementById("arrow");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
