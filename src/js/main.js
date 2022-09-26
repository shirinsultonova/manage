var elBtnBurger = document.querySelector(".js-burger-btn");
var elNavBar = document.querySelector(".js-navbar") 
var elOverlay = document.querySelector(".js-overlay")

elBtnBurger.addEventListener("click", function(){
    elBtnBurger.classList.toggle("bg-burger");
    elNavBar.classList.toggle("hidden");
    elOverlay.classList.toggle("hidden");
    elBtnBurger.classList.toggle("bg-burger-x");
    elBtnBurger.closest(".site-body").classList.toggle("overflow-hidden");
})

$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
