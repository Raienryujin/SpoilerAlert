chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: getSpoilerStatus
    }, (results) => {
        const statusDiv = document.getElementById("status");
        if (results[0].result) {
            statusDiv.textContent = "Spoilers detected!";
            statusDiv.style.backgroundColor = "#e74c3c"; // Red for danger
            statusDiv.style.color = "#ecf0f1";
        } else {
            statusDiv.textContent = "No spoilers detected.";
            statusDiv.style.backgroundColor = "#1abc9c"; // Green for safe
            statusDiv.style.color = "#2c3e50";
        }
    });
});

function getSpoilerStatus() {
    return spoilerDetected;
}

document.getElementById("rescan-btn").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: checkForSpoilers
        });
    });
});

document.getElementById("settings-btn").addEventListener("click", () => {
    alert("Settings are not implemented yet.");
});
