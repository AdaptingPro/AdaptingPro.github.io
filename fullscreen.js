function toggleFullScreen(elementId) {
    const videoElement = document.getElementById(elementId);
    if (videoElement) {
        if (!document.fullscreenElement) {
            videoElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}