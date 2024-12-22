var sideBar =document.getElementById("sidebar")
function navbarExpand(){
    sideBar.style.display = "block"
}

function navbarCollapse(){
    sideBar.style.display = "none"
}

window.addEventListener("resize", function () {
    if(this.window.innerWidth>= 992){
        navbarCollapse()
    }
})
