// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var imageSlides = document.getElementsByClassName('imageSlides');
var leftArrow = document.querySelector('.leftArrow');
console.log(leftArrow)
var rightArrow = document.querySelector('.rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
    }
}



// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
    var currentImage = imageSlides[counter];
    currentImage.classList.add('visible');
    counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
    var target = e.target;
    if (target == leftArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        if (counter == 1) {
            counter = (imageSlides.length - 1);
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            counter--;
            counter--;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    } else if (target == rightArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        if (counter == imageSlides.length) {
            counter = 0;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop();
    } else {
        counter = 0;
        hideImages();
        imageLoop();
    }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);