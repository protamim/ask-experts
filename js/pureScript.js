const humberger = document.getElementById("humberger")
const closeBar = document.getElementById("close");
const navWrapper = document.querySelector(".nav-wrapper");

humberger.addEventListener("click", function(){
    humberger.style.display = "none";
    closeBar.style.display = "block";
    navWrapper.style.left = "0px";
});

closeBar.addEventListener("click", function(){
    humberger.style.display= "block";
    closeBar.style.display = "none";
    navWrapper.style.left = "-40rem";
});

const breakPoints = ()=> {
    if(innerWidth > 1279){
        humberger.style.display = "none";
        closeBar.style.display = "none";
        console.log(`Now window width is: ${innerWidth}`);
    }else{
        humberger.style.display= "block";
    }
}
window.addEventListener("resize", breakPoints);