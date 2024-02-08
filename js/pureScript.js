const humberger = document.getElementById("humberger")
const closeBar = document.getElementById("close");
const navWrapper = document.querySelector(".nav-wrapper");

humberger.addEventListener("click", function(){
    humberger.style.display = "none";
    closeBar.style.display = "block";
    navWrapper.style.left = "0px";
});

closeBar.addEventListener("click", function(){
    humberger.classList.add("block");
    closeBar.style.display = "none";
    navWrapper.style.left = "-40rem";
});

