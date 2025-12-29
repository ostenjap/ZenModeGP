document.getElementById('activateBtn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { action: "CLEAN_PAGE" });

    // Change button text to show it worked
    const btn = document.getElementById('activateBtn');
    btn.innerText = "Activated!";
    btn.style.backgroundColor = "#4bb543";
    btn.style.color = "white";
});