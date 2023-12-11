let sidebar = document.getElementById("sidebar")
//anonymous version of my scrolling event
window.addEventListener("scroll", (event) => {
    //when the user scrolls down 100 pixels, the sidebar is set to active
    //see the css file for more, but basically:
    //it's set to visible, and the fade in animation plays
    if (window.scrollY > 200) {
        sidebar.classList.add("active-sidebar")
    }
    //when the user scrolls back up, the fade out animation plays
    //this only plays AFTER the fide-in has played already
    if (window.scrollY < 201 && sidebar.classList.contains("active-sidebar")) {
        sidebar.style.animation="fade_out .5s"
    }
})

//once the fade-out animation plays, THEN it's set to invisible
//this prevents the sidebare from vanishing instantly, since you cant set visibility in an animation
//and obviously, instant invisibility renders the animation pointless
document.addEventListener('animationend', function (e) {
    if (e.animationName === "fade_out") {
        e.target.classList.remove("active-sidebar");
        sidebar.style.removeProperty("animation")
    }
});

//traditional version of my scroll event, for if i want to call it elsewhere in the code
/* window.addEventListener("scroll", scrollEvent)

function scrollEvent(event) {
    if (window.scrollY > 100) {
        sidebar.classList.add("active-sidebar")
        console.log(sidebar)
    }
    if (window.scrollY < 101 && sidebar.classList.contains("active-sidebar")) {
        sidebar.style.animation="fade_out .5s"
        //sidebar.classList.remove("active-sidebar")
        console.log(sidebar)
    }
} */

