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

        //adds animatio on this 2

        //adds a data attributes(data-active) to the specific index assigned
        slides.children[slideIndex].dataset.active = true
        
        // if(button.dataset.carouselButton === "next") {
        //     slides.children[slideIndex].style.animation = "slide-from-left 0.3s linear forwards"
        // }else{
        //     slides.children[slideIndex].style.animation = "slide-from-right 0.3s linear forwards"  
        // }

        //deletes the active data attributes(data-active)
        // activeSlide.style.animation = "slide-from-left 0.3s linear forwards"
        delete activeSlide.dataset.active

    })
    
})