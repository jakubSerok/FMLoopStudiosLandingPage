const hamButton = document.querySelector(".ham");
const closeButton =document.querySelector(".close");
const navContainer = document.querySelector(".navContainer");
const navBlackContainer = document.querySelector(".navBlackBox");

hamButton.addEventListener("click",function(){
    navContainer.classList.add("hidden");
    navBlackContainer.classList.remove("hidden");
})
closeButton.addEventListener("click",function(){
    navContainer.classList.remove("hidden");
    navBlackContainer.classList.add("hidden");
    
})

