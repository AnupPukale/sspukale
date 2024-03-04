

// JavaScript code to hide the navigation menu when a link is clicked at max-width of 768px

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav ul li a");
    var checkbox = document.getElementById("check");

    // Add click event listener to each link
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            // If the menu is open at max-width of 768px, close it
            if (window.matchMedia("(max-width: 768px)").matches && checkbox.checked) {
                checkbox.checked = false;
            }
        });
    });
});
