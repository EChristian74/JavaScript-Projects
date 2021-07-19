// removes fade-out
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
  });

// form validation
function validateForm() {
    let x = document.forms["vwForm"]["phone"].value;
    if (x == "") {
        alert("Please provide phone number");
        return false;
    }
}

function openForm() {
    document.getElementById("popForm").style.display = "block";
}

    function closeForm() {
    document.getElementById("popForm").style.display = "none";
}

// automatic slideshow
var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1,2,3,4,5,6,7,8,9,10}  
    slides[slideIndex-1].style.display = "block";  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
   
