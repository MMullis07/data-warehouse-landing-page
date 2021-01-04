// Nav bar show and close function
$(function () {
  $("#nav").click(function () {
    $(this).toggleClass("open");
  });
});

// Carousel Functionality Begins
var carouselIndex = 1;
showSlides(carouselIndex);

// Next/Previous Controls
function plusSlides(n) {
  showSlides((carouselIndex += n));
}

// Testimonial Controls
function currentSlide(n) {
  showSlides((carouselIndex = n));
}

// Show Testimonial Controls
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myCarousel");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    carouselIndex = 1;
  }
  if (n < 1) {
    carouselIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[carouselIndex - 1].style.display = "block";
  dots[carouselIndex - 1].className += " active";
}

// Timed Testimonial Change Function
var slideIndex = 0;
showTestimonials();

function showTestimonials() {
  var i;
  var dots = document.getElementsByClassName("dot");
  var slides = document.getElementsByClassName("myCarousel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showTestimonials, 5000);
}

// Scroll Animations
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
