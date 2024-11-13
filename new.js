document.addEventListener("DOMContentLoaded", function () {
    const originalHTML = document.getElementById('console').innerHTML; // Capture the original HTML content
    const consoleElement = document.getElementById('console');
    let index = 0;
    let output = '';
    let isTag = false;  // This will track if we are inside an HTML tag
    let tag = '';       // To store the HTML tag being processed

    // Clear the current content for the typing effect
    consoleElement.innerHTML = '';

    function typeText() {
        if (index < originalHTML.length) {
            let char = originalHTML.charAt(index);

            // If it's the start of an HTML tag
            if (char === '<') {
                isTag = true;
                tag = '<';  // Start a new tag
            }

            // If we are inside an HTML tag, add the character to the tag
            if (isTag) {
                tag += char;
                output += char;

                // If it's the end of an HTML tag
                if (char === '>') {
                    isTag = false;
                }
            } else {
                // If it's a regular character, apply the typing effect
                output += char;
                consoleElement.innerHTML = output;  // Update the content
            }

            index++;

            // Continue typing the next character after a delay
            setTimeout(typeText, 10); // Adjust the typing speed here
        }
    }

    typeText(); // Start typing effect
});
