const spoilerKeywords = [
    "dies", "death", "kills", "killed", "murder", "betrays", "end", "ending", 
    "final", "revealed", "reveals", "plot twist", "twist", "secret", "identity"
];

let spoilerDetected = false;

function checkForSpoilers() {
    const textContent = document.body.innerText.toLowerCase();
    spoilerDetected = spoilerKeywords.some(keyword => textContent.includes(keyword));

    if (spoilerDetected) {
        alert("Spoiler Alert: This article may contain spoilers!");
    }
}

checkForSpoilers();
