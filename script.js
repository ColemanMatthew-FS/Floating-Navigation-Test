let sidebar = document.getElementById("sidebar")
window.addEventListener("scroll", (event) => {
    //when the user scrolls down 200 pixels, the sidebar is set to active
    //see the css file for more, but basically:
    //it's set to visible, and the fade in animation plays
    if (window.scrollY > 200) {
        sidebar.classList.add("active-sidebar")
    }
    //when the user scrolls back up, the fade out animation plays
    //the end of this event is listened to (see line 19)
    if (window.scrollY < 201 && sidebar.classList.contains("active-sidebar")) {
        sidebar.style.animation="fade_out .5s"
    }
})

//once the fade-out animation plays, THEN the menu is set to invisible
//this prevents the sidebar from vanishing instantly
//since instant invisibility cut off the animation
document.addEventListener('animationend', function (e) {
    if (e.animationName === "fade_out") {
        e.target.classList.remove("active-sidebar");
        sidebar.style.removeProperty("animation")
    }
});

