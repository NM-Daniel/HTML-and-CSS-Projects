function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This displays the first image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

// Changes the slide when left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with class name mySlides and stores them in array called 'slides'
    var dots = document.getElementsByClassName("dot"); // Takes all "dot" class elements and makes an array called 'dots'
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in array "slides" and sets display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This display image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to dot associated with image
}

// will close the contact form when the user clicks off of it
// The first step is to add evetn listener for any clicks on website
document.addEventListener("click", function (event) {
    // Here it states that if click happens on cancel button OR anywhere not on the contact form AND click does not happen on elemtns with contact class then the closeForm() is called
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )