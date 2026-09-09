// Select the button
let darkTheme = localStorage.getItem('darkTheme');
const darkModeToggle = document.querySelector('#darkModeToggle');
const iconTheme = document.getElementById('iconTheme');

// Determine the relative path based on the current location
const currentPath = window.location.pathname;

const darkModeEnabled = () => {
    // Replace the source by the image for the dark theme
    iconTheme.src = currentPath.includes('pages') ? '../img/icons/moonMin.svg' : './img/icons/moonMin.svg';
    // Add dark mode class to the body
    document.documentElement.classList.add('darkTheme');
    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkTheme', 'enabled');
};

const darkModeDisabled = () => {
    // Replace the source by the image for the light theme
    iconTheme.src = currentPath.includes('pages') ? '../img/icons/sunMin.svg' : './img/icons/sunMin.svg';
    // Remove dark mode class to the body
    document.documentElement.classList.remove('darkTheme');
    // Udpate dark mode class in the localStorage
    localStorage.setItem('darkTheme', 'disabled');
};

// If user had "dark mode" enabled, will keep it after page reloaded
if (darkTheme === 'enabled') {
    darkModeEnabled();
    toggleHighlightingTheme();
}

darkModeToggle.addEventListener('click', () => {
    darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme !== "enabled") {
        darkModeEnabled();
        toggleHighlightingTheme();
    }
    else {
        darkModeDisabled();
        toggleHighlightingTheme();
    }
});

// Run when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    toggleHighlightingTheme();
});

function toggleHighlightingTheme() {
    // Check if an element with the code tag exists
    const codeElement = document.querySelector('code');
    if (codeElement !== null) {
        // Check if dark theme is enabled
        let darkTheme = localStorage.getItem('darkTheme');
        // Get the link element for the stylesheet
        const styleSheetLink = document.createElement('link');
        styleSheetLink.rel = 'stylesheet';
        baseUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/';
        styleSheetLink.href = darkTheme === 'enabled' ? baseUrl + 'tokyo-night-dark.css' : baseUrl + 'stackoverflow-light.css';

        // Append the link element to the document head
        document.head.appendChild(styleSheetLink);
    }
}