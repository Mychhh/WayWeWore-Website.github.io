// container for buttons
// querySelectorAll gets all the matching element
const buttons =  document.querySelectorAll("[data-carousel-button]");

//loop through buttons using foreach loop
buttons.forEach( (button, index)  => {

    //adds click event listener for every button
    button.addEventListener("click", () => {

        //checks the value of button data attribute(carousel-button) and assign value to offset container using ternary operator
        const offset = button.dataset.carouselButton === "next" ? 1 : -1

        //closest() method gets the closest ancestor element
        //querySelector gets the first matching element
        //query starts to the matching element and traverse to the element
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")

        //converts the slides children to array and finds the index of children where data attribute is active slide, then adds value to index depending on button clicked
        let slideIndex = [...slides.children].indexOf(activeSlide) +  offset

        if(slideIndex < 0) {
            slideIndex = slides.children.length - 1;
        }
        else if(slideIndex >= slides.children.length) {
            slideIndex = 0;
        }

        //adds a data attributes(data-active) to the specific index assigned
        slides.children[slideIndex].dataset.active = true
        
        if(button.dataset.carouselButton === "next") {
            // activeSlide.style.animation = "old-slide-to-right 0.5s linear"
            activeSlide.style.opacity = 0;
            activeSlide.style.transition = "opacity 0.65s"

            // slides.children[slideIndex].style.animation = "slide-from-left 0.5s linear forward"
            slides.children[slideIndex].style.opacity = 1;
            slides.children[slideIndex].style.transition = "opacity 0.65s"
        }else{
            // activeSlide.style.animation = "old-slide-to-left 0.5s linear"
            activeSlide.style.opacity = 0;
            activeSlide.style.transition = "opacity 0.65s"

            // slides.children[slideIndex].style.animation = "slide-from-right 0.5s linear forward"   
            slides.children[slideIndex].style.opacity = 1;
            slides.children[slideIndex].style.transition = "opacity 0.65s"
        }

        //deletes the active data attributes(data-active)
        delete activeSlide.dataset.active
        
    })
    
})