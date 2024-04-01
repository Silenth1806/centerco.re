console.log("hi")

// Function to get the ending component of the current URL
function getEndingComponent() {
    var url = window.location.pathname;
    // Remove ".html" from the URL if present
    url = url.replace(/\.html$/, "");
    // Remove any trailing slashes
    url = url.replace(/\/$/, "");
    // Split the URL by slashes
    var parts = url.split("/");
    // Get the last part of the array
    var ending = parts[parts.length - 1];

    return ending;
}

var page = getEndingComponent();

console.log(page.toLowerCase())


function pageSetup() {
    // Get the element by its ID
    var element = document.getElementById("bg");

    var test = "hello"

    // Define the CSS background property
    var backgroundStyle = "linear-gradient( rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(https://64.media.tumblr.com/2d2dcd2bcb9329fc65e5da7aa35ac1f2/5df7e79300dfd01b-3f/s1280x1920/6054d024cb443ed46d6f68e7effd509161a0b582.gifv)";

    // Apply the background style to the element
    element.style.background = backgroundStyle;
    element.style.backgroundSize = "250px"
}

pageSetup()








