(function(){
    var url = window.location.href;
    var filename = url.split("/").pop();
    var allLinks = document.querySelectorAll("nav ul li");
    for(var i = 0; i < allLinks.length; i++){
        if (allLinks[i].querySelector("a").getAttribute("href") == filename){
            allLinks[i].querySelector("a").className = "currentPage";
            break;
        }
    }
})()

function viewMenu(){
    console.log("hello")
    var burgerMenus = document.getElementsByClassName("burgerMenu");
    for(var i = 0; i < burgerMenus.length; i++){

        burgerMenus[i].classList.toggle("menuOpen");
    }
    var navMenu = document.getElementById("navMenu");
    if (navMenu.style.display == "none"){navMenu.style.display = "block"}
    else {navMenu.style.display = "none"}
}