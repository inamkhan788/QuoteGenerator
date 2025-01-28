const apiUrl = "https://api.quotable.io/random"; // Correct API URL
const quote = document.getElementById("quote"); // Element for the quote
const author = document.getElementById("author"); // Element for the author

// Async function to fetch the quote
async function getquote(url) {
    try {
        const response = await fetch(url); // Fetching the quote
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 status
        }
        const data = await response.json(); // Parse JSON response
        console.log(data); // Log the data for debugging
        quote.innerHTML = data.content; // Update the quote content
        author.innerHTML = `- ${data.author}`; // Update the author name
    } catch (error) {
        console.error("Error fetching the quote:", error); // Log the error for debugging
        quote.innerHTML = "Oops! Unable to load a quote."; // Fallback for quote
        author.innerHTML = ""; // Clear the author on error
    }
}

// Initial call to load a quote
getquote(apiUrl);
