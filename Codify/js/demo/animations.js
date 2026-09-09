// Initialize the app
const appImageEffect = Vue.createApp({
    data() {
      return {
        addAnimation: 'logoSvgProperties', // Initially add 'logoSvgProperties'
      };
    },
    methods: {
      applySvgAnimation() {
        // Clear all classes first, then add the animation class
        this.addAnimation = 'logoSvgProperties logoAnimation';
      }
    }
  });

// Mount the app to the DOM
appImageEffect.mount('#appAnimatedFont');