// const slides = document.querySelectorAll(".short-slide")
// const modelNextBtn = document.querySelector(".nextBtn")
// const modelPrevBtn = document.querySelector(".prevBtn")

// slides.forEach(function(slide, index){
//     slide.style.left = `${index * 100}%`
// })

// let counter = 0

// modelNextBtn.addEventListener("click", function(){
//     counter++
//     carousel()
// })
// modelPrevBtn.addEventListener("click", function(){
//     counter--
//     carousel()
// })

// function carousel(){

//     if(counter === slides.length){
//         counter = 0
//     }else if(counter < 0){
//         counter = slides.length -1
//     }

//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     })
// }