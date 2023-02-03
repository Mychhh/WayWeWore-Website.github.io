let container = document.querySelector(".models-container__models-slider-container")
let slide = document.querySelectorAll(".models-container__models-slide")

slide.forEach((slide, index) => {
    // Short hand backticks
    slide.style.left =  `${index * 100}%`
})

// // function
// function previousButton(){

// }

let carouselSlide = 0

// arrow function
const prevButton = () => {
    carouselSlide--
    moveCarousel()
}
const nextButton = () => {
    carouselSlide++
    moveCarousel()
}

const moveCarousel = () => {

    if(carouselSlide === slide.length){
        carouselSlide = 0
    }else if(carouselSlide < 0){
        carouselSlide = slide.length - 1
    }

    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${carouselSlide * 100}%)`
    })
}

// // Model auto slider
// function autoslideModel() {
//     timerModel = setInterval(() => {
//         nextButton()
//     }, 5000)
// }

// window.onload = function () {
//     autoslideModel()
// }

// function pauseModel() {
//     clearInterval(timerModel)
// }

