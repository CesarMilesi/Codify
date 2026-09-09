// Select the button for the demo section
let darkThemeDemo = localStorage.getItem('darkItemDemo');
// Select the button
const darkModeToggleDemo = document.getElementById('darkModeToggleDemo');
// Select the icon
const iconThemeDemo = document.getElementById('iconThemeDemo');
// Select the demo section
let primaryDiv = document.getElementById("primaryDivDemo");
// Select the paragraph text
let clickText = document.getElementById("demoText");


const darkModeEnabled_Demo = () => {
    // Replace the source by the image for the dark theme
    iconThemeDemo.src = currentPath.includes('pages') ? '../img/icons/moonMin.svg' : './img/icons/moonMin.svg';

    // Change color of section's background
    primaryDiv.style.background = `linear-gradient(#333333
                                    0 0) padding-box,
                                    linear-gradient(to right, #E0C2FF, #CC85FF) border-box`;

    // Change color of the dark toggle background
    darkModeToggleDemo.style.backgroundColor = "#333333";

    // Change color for the paragraph text
    clickText.style.color = "#fff";

    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkItemDemo', 'enabled');
};

const darkModeDisabled_Demo = () => {
    // Replace the source by the image for the light theme
    iconThemeDemo.src = currentPath.includes('pages') ? '../img/icons/sunMin.svg' : './img/icons/sunMin.svg';

    // Change colors of elements
    primaryDiv.style.background = `linear-gradient(#F1F1F1
        0 0) padding-box,
        linear-gradient(to right, #8400BD, #60008A) border-box`;

    // Change color of the dark toggle background
    darkModeToggleDemo.style.backgroundColor = "#F1F1F1";

    // Change color for the paragraph text
    clickText.style.color = "#000";

    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkItemDemo', 'disabled');
};

// If user had "dark mode" enabled, will keep it after page reloaded
if (darkThemeDemo === 'enabled') {
    darkModeEnabled_Demo();
}

darkModeToggleDemo.addEventListener('click', () => {
    darkThemeDemo = localStorage.getItem("darkItemDemo");
    if (darkThemeDemo !== "enabled") {
        darkModeEnabled_Demo();
    }
    else {
        darkModeDisabled_Demo();
    }
});