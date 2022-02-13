open= document.getElementById("hamburger");
close= document.getElementById("closeNav");
link= document.getElementById("link")


open.addEventListener("click", function(){
    link.style.width ="200px"
})
close.addEventListener("click", function(){
    link.style.width = "0px"
})