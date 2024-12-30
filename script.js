var links = document.getElementsByClassName("link");
var titlecontents = document.getElementsByClassName("titles-content");

function opentab(tabname) {
    for (let link of links) {
        link.classList.remove("active-link");
    }
    for (let titlecontent of titlecontents) {
        titlecontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}

document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0"; 
    }

    function closemenu() {
        sidemenu.style.right = "-200px"; 
    }

    
    document.querySelector(".fa-bars").onclick = openmenu;
    document.querySelector(".fa-xmark").onclick = closemenu;
});



