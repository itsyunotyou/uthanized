let slides = document.querySelectorAll('.slide');
let thumbnails = document.querySelectorAll('.thumbnail');
let currentSlide = document.querySelector('.slide.show');
let slideCount = slides.length;
let currentSlideId = currentSlide.dataset.slide;
let nextSlideBtn = document.querySelector('.slide-btn.next');
let prevSlideBtn = document.querySelector('.slide-btn.prev');
let nextSlideTimer = 1000;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', showSlide);
});

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);

let slideshow = setInterval(nextSlide, nextSlideTimer);

function showSlide(e) {
    let slideId = e.currentTarget.dataset.slide;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${slideId}"`);

    currentSlide.classList.add('show');

    resetSlideShow();
}

function nextSlide() {
    let nextSlideId = currentSlideId >= slideCount ? 1 : parseInt(currentSlideId) + 1;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${nextSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add('show');

    resetSlideShow();
}

function prevSlide() {
    let prevSlideId = currentSlideId <= 1 ? slideCount : parseInt(currentSlideId) - 1;

    currentSlide.classList.remove('show');

    currentSlide = document.querySelector(`.slide[data-slide="${prevSlideId}"`);
    currentSlideId = currentSlide.dataset.slide;

    currentSlide.classList.add('show');

    resetSlideShow();
}

function resetSlideShow() {
    clearInterval(slideshow);
    slideshow = setInterval(nextSlide, nextSlideTimer);
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "main/css";
  css.innerHTML = ".typewrite > .wrap {border-right: 0.03em solid #ffff}";
  document.body.appendChild(css);
};


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}