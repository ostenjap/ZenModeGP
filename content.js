const cleanGrokipedia = () => {
    const header = document.querySelector('div[class*="grid-cols-[1fr_3fr_1fr]"]');
    const tableOfContents = document.querySelector('ul.space-y-2.text-sm');

    if (header) header.style.display = 'none';
    if (tableOfContents) tableOfContents.style.display = 'none';

    console.log("Grokipedia: UI Elements Cleaned.");
};

// Listen for the message from the popup button
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "CLEAN_PAGE") {
        // Run immediately when clicked
        cleanGrokipedia();

        // Also set the interval so it STAYS clean while you use the site
        setInterval(cleanGrokipedia, 2000);
    }
});