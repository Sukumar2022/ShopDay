$(document).ready(function () {
    window.addEventListener("scroll",function(){
        if(window.scrollY>120){
            $('#c-bar').css("background-color","rgb(233, 227, 227)");
            $('#c-bar').css("position","fixed");
            $('#c-bar').css("top","0");
            $('#c-bar').css("left","0");
            $('#c-bar').css("box-shadow","2px 2px 10px 2px gray");
        }
        
        else if(this.window.screenY<20){
            $('#c-bar').css("position","absolute");
            $('#c-bar').css("top","100%");
            $('#c-bar').css("left","0");
            $('#c-bar').css("box-shadow","none");
        }
    });
});

const openNavbar=()=>{
    document.getElementById('res-nav').style.width='410px';
}
const closeNavbar=()=>{
    document.getElementById('res-nav').style.width='0';
}
//calling cart menu
const callCart=()=>{
    document.getElementById('add-cart').style.width='350px';
}
const exitCart=()=>{
    document.getElementById('add-cart').style.width='0';
}

