var a;

function show_hide(){

    if(a == 1){
        document.getElementById("menu-container-mobile").style.display="none";
        return a = 0;
    }else{
        document.getElementById("menu-container-mobile").style.display="flex";
        return a = 1;
    }
    
}