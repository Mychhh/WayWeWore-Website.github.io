var a;

function show_hide(){

    if(a == 1){
        // removes the slider menu
        document.getElementById("menu-container-mobile").style.display="none";
        //animation to show menu to the right
        document.getElementById("nav__hamburger-menu").style.transform = "translate(0%)";
        document.getElementById("nav__hamburger-menu").style.transitionDuration = "1s";
        return a = 0;
    }else{
        // shows the slider menu
        document.getElementById("menu-container-mobile").style.display="flex";
        //animation to hide menu to the left
        document.getElementById("nav__hamburger-menu").style.transform = "translate(-300%)";
        document.getElementById("nav__hamburger-menu").style.transitionDuration = "0.5s";
        return a = 1;
    }
    
}