const recommendationSlide = document.querySelectorAll(".recommendation-container__slide")
const recommendationPrevBtn =  document.querySelector(".recommendation-container__prevBtn")
const recommendationNextBtn =  document.querySelector(".recommendation-container__nextBtn")

recommendationSlide.forEach(function (recommendation, index){
    recommendation.style.left = `${index * 100}%`
})

let recommendationSlideNumber = 0

recommendationPrevBtn.addEventListener("click", function() {
    recommendationSlideNumber--
    recommendationCarousel()
})

recommendationNextBtn.addEventListener("click", function() {
    recommendationSlideNumber++
    recommendationCarousel()
})

const recommendationCarousel = () => {

    if(recommendationSlideNumber === recommendationSlide.length){
        recommendationSlideNumber = 0
    }
    else if(recommendationSlideNumber < 0){
        recommendationSlideNumber = recommendationSlide.length - 1
    }

    recommendationSlide.forEach((recommendation) => {
        recommendation.style.transform = `translateX(-${recommendationSlideNumber * 100}%)`
    })
}