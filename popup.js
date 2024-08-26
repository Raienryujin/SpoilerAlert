chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: getSpoilerStatus
    }, (results) => {
        const statusDiv = document.getElementById("status");
        if (results[0].result) {
            statusDiv.textContent = "Spoilers detected!";
            statusDiv.style.color = "red";
        } else {
            statusDiv.textContent = "No spoilers detected.";
            statusDiv.style.color = "green";
        }
    });
});

function getSpoilerStatus() {
    return spoilerDetected;
}
