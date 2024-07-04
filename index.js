

const menu=document.querySelector(".icon");
const icons=document.querySelector("#mode");
const menuList=document.querySelector(".ul-item");
const navbarList=document.querySelector(".navbar-list1");
let threeDots=true;



function menuswap(){
    if(threeDots==true){
        icons.className="fa-solid fa-xmark";
        threeDots=false;
        menuList.classList.add("active");
    }
    else{
        icons.className="fa-solid fa-bars";
        threeDots=true;
        menuList.classList.remove("active");
    }
}


menu.addEventListener("click",()=>{
    menuswap();
});
navbarList.addEventListener("click",()=>{
    menuswap();
});



