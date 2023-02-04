// Usefull Links
let clickUsefulLink = document.querySelector('.footer__useful-links')
let usefulLinks = document.querySelector('.Useful')

let usefulIsOpen = false;

// follow us links
let clickFollowUs = document.querySelector('.footer__follow-us')
let usefulFollow = document.querySelector('.Follow')

let followIsOpen = false;

// address links
let clickAddress = document.querySelector('.footer__address')
let usefulAddress = document.querySelector('.Address')

let addressIsOpen = false;


clickUsefulLink.addEventListener('click', function() {
    usefulIsOpen = !usefulIsOpen;
    if(window.innerWidth < 768){    
        if(usefulIsOpen == true){
            usefulLinks.classList.add('active-footer-links')
            usefulLinks.style.display = 'block';
            // usefulLinks.style.opacity = 1;
        }else{
            usefulLinks.classList.remove('active-footer-links')
            usefulLinks.style.display = 'none';
            // usefulLinks.style.opacity = 0;
        }
    }
})

clickFollowUs.addEventListener('click', function() {
    followIsOpen = !followIsOpen;
    if(window.innerWidth < 768){   
        if(followIsOpen == true){
            usefulFollow.classList.add('active-footer-follow')
            usefulFollow.style.display = 'block';
            // usefulFollow.style.opacity = 1;
        }else{
            usefulFollow.classList.remove('active-footer-follow')
            usefulFollow.style.display = 'none';
            // usefulFollow.style.opacity = 0;
        }
    }
})

clickAddress.addEventListener('click', function() {
    addressIsOpen = !addressIsOpen;
    console.log(window.innerWidth)
    if(window.innerWidth < 768){
        if(addressIsOpen == true){
            usefulAddress.classList.add('active-footer-address')
            usefulAddress.style.display = 'block';
            // usefulAddress.style.opacity = 1;
        }else{
            usefulAddress.classList.remove('active-footer-address')
            usefulAddress.style.display = 'none';
            // usefulAddress.style.opacity = 0;
        }
    }

})

