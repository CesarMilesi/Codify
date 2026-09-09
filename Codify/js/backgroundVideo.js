// Create a new Vue application instance
const appBackgroundVideo = Vue.createApp({
    // Define data properties
    data() {
      return {
        // Set the video source path
        videoSrc: './mov/desktopTablet/snowWhite.mp4'
      };
    },
    // Define methods for the component
    methods: {
      // Method to restart the video playback
      restartVideo() {
        // Retrieve the video element using ref
        const videoElement = this.$refs.heroVideo;
        // Check if the video element exists
        if (videoElement) {
          // Set the current time of the video to 0 (beginning)
          videoElement.currentTime = 0;
          // Set the playback rate of the video for slower playback
          videoElement.playbackRate = 0.4;
          // Play the video
          videoElement.play();
        }
      }
    },
    // Lifecycle hook: mounted
    mounted() {
      // Add event listener for DOMContentLoaded event
      document.addEventListener('DOMContentLoaded', () => {
        // Retrieve the video element using ref
        const videoElement = this.$refs.heroVideo;
        // Check if the video element exists
        if (videoElement) {
          // Add event listener for loadedmetadata event
          videoElement.addEventListener('loadedmetadata', () => {
            // Call restartVideo method when video metadata is loaded
            this.restartVideo();
          });
        }
      });
    }
  });

  // Mount the Vue application instance to the specified element
  appBackgroundVideo.mount('#appBackgroundVideo');