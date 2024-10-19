let isVideoPaused = false;

// Function to handle video play/pause based on visibility
const handleVisibilityChange = () => {
  const video = document.querySelector("video");

  if (document.visibilityState === "visible") {
    // Resume the video
    if (isVideoPaused && video) {
      video.play();
      isVideoPaused = false;
      console.log("Video resumed.");
    }
  } else {
    // Pause the video
    if (video) {
      video.pause();
      isVideoPaused = true;
      console.log("Video paused.");
    }
  }
};

// Add event listener for visibility change
document.addEventListener("visibilitychange", handleVisibilityChange);
