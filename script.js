// window.onscroll = function() {myFunction()}
// window.onscroll = function() {myFunction()}

// function myFunction(){
//     if(document.documentElement.scrollTop >600){
//         document.getElementById("navbar_container").className="navbar_black"
//     }
//     else{
//         document.getElementById("navbar_container").className="navbar"
//     }
// }

var toggle = document.getElementById("toggle_nav")
function openMenu(){
    toggle.classList.remove("nav_original")
    toggle.classList.add("nav_changed")
}
function closeMenu(){
    toggle.classList.remove("nav_changed")
    toggle.classList.add("nav_original")
}

var tablinks = document.getElementsByClassName('tab_link')
var tabcontents = document.getElementsByClassName('tab_content')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active_link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add("active_tab")
}

