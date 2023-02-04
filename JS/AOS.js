let animationOnScroll = document.querySelectorAll(".AOS");

window.addEventListener('scroll', throttle(scanElements, 25))

function scanElements(){
    animationOnScroll.forEach(animationonscroll => {
        if(isVisible(animationonscroll)){
            animationonscroll.classList.add('active');
        }else{
            animationonscroll.classList.remove('active');
        }
    })
}

function isVisible(element){
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -50;
    console.log(elementDiv.top - window.innerHeight);
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

function throttle(fn, delay){
    let lastCall = 0
    return(...args) => {
        let context = this;
        let current = new Date().getTime();

        if(current - lastCall < delay){
            return
        }

        lastCall = current;
        return fn.apply(context, ...args)
    }
}