from flask import Flask, request, jsonify
# will need to include image analysis library with LLM model containing spoiler detection
# from some_image_analysis_library import analyze_image_for_spoilers

app = Flask(__name__)

@app.route('/analyze-image', methods=['POST'])
def analyze_image():
    data = request.json
    image_url = data['imageUrl']
    is_spoiler = analyze_image_for_spoilers(image_url)
    return jsonify({'isSpoiler': is_spoiler})

if __name__ == '__main__':
    app.run(debug=True)


@app.route('/analyze-video', methods=['POST'])
def analyze_video():
    data = request.json
    video_url = data['videoUrl']
    frames = extract_frames(video_url)  # Function to extract frames from video
    is_spoiler = False
    for frame in frames:
        if analyze_image_for_spoilers(frame):
            is_spoiler = True
            break
    return jsonify({'isSpoiler': is_spoiler})
