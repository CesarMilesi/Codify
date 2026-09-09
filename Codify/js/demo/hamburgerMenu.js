const linksDemo = document.querySelectorAll(".navElementDemo");
const menuDemo = document.querySelector(".navbarDemo");

iconDemo.addEventListener("click", () => {
    navContainerDemo.classList.toggle("active"); // Add "active" class when clicking on the menuDemo icon
})

/* If we click on a link, it will remove the "active" class and hide again the navbar */
linksDemo.forEach((link) => {
    link.addEventListener("click", () => {
        navbarDemo.classList.remove("active");
    });
});

const navContainerDemo = document.getElementById('navContainerDemo');

function resizeElement() {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const mobileWidthThreshold = 768; // threshold for mobile width

    if (screenWidth < mobileWidthThreshold) {
        // Set the width of the element to 44 cqi for mobile screens
        navContainerDemo.style.width = '44cqi';
    } else {
        // Do nothing if the screen width is not considered mobile
        navContainerDemo.style.width = ''; // Reset to default or use a specific value
    }
}

// Call the resizeElement function initially and on window resize
resizeElement();
window.addEventListener('resize', resizeElement);