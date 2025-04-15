document.addEventListener("DOMContentLoaded", function() {
    function updateBackground() {
        let body = document.body;
        if (window.innerWidth > 1024) {
            body.style.backgroundImage = "url('background-desktop.jpg')";
        } else if (window.innerWidth > 768) {
            body.style.backgroundImage = "url('background-tablet.jpg')";
        } else {
            body.style.backgroundImage = "url('background-mobile.jpg')";
        }
    }
    
    window.addEventListener("resize", updateBackground);
    updateBackground(); // Initial call on load
});
