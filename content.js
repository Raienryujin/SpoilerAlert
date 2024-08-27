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

async function analyzeImage(imageUrl) {
    try {
        const response = await fetch(`https://your-backend-server.com/analyze-image`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl }),
        });
        const result = await response.json();
        if (result.isSpoiler) {
            alert("Spoiler Alert: This image may contain spoilers!");
        }
    } catch (error) {
        console.error("Error analyzing image:", error);
    }
}

async function analyzeVideo(videoUrl) {
    try {
        // will need to include a back end server to analyze the video
        const response = await fetch(`https://server-to-analyze-video.com/analyze-video`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl }),
        });
        const result = await response.json();
        if (result.isSpoiler) {
            alert("Spoiler Alert: This video may contain spoilers!");
        }
    } catch (error) {
        console.error("Error analyzing video:", error);
    }
}

function processMedia() {
    const images = document.querySelectorAll('img');
    images.forEach(img => analyzeImage(img.src));

    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        const source = video.querySelector('source');
        if (source) {
            analyzeVideo(source.src);
        } else if (video.src) {
            analyzeVideo(video.src);
        }
    });
}

checkForSpoilers();
processMedia();
