var slideWrapper = document.querySelector('.container');
var slides = document.querySelectorAll('.image');
var totalSlides = slides.length; 


var sliderWidth = slideWrapper.clientWidth;
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'px';

showSlides()

function showSlides() {
    for(var i=0;i<slides.length;i++){
        slider.style.left = -(sliderWidth * slideIndex) + 'px';    
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2000); 
};



// fade-in

const $section1 = $("#fade-in-1");
// const $section2 = $("#fade-in-2");
// const $section3 = $("#fade-in-3");

$(window).on("scroll",
    function () {
        if ($(window).scrollTop() > 300) {
            $section1.addClass("fade-in");
        } else {
            $section1.removeClass("fade-in");
        }
    }
)
// $(window).on("scroll",
//     function () {
//         if ($(window).scrollTop() > 3100) {
//             $section2.addClass("fade-in");
//         } else {
//             $section2.removeClass("fade-in");
//         }
//     }
// )
// $(window).on("scroll",
//     function () {
//         if ($(window).scrollTop() > 4600) {
//             $section3.addClass("fade-in");
//         } else {
//             $section3.removeClass("fade-in");
//         }
//     }
// )



// slide-up

const $front = $("#front");
const $screen = $("#screen");

$front.delay(3000).animate({ "top": "50px", "opacity": "0" }, 
    function() {
        $front.hide();
    }
);
$screen.delay(2000).animate({ "height": "0" }, 100);