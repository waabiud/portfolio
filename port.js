var hamburger= document.querySelector(".hamb");
var navlist= document.querySelector(".nav-list");
var links= document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
        this.classList.toggle("click");
        navlist.classList.toggle("open");
});

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}