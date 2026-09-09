// Initiate the Vue app
const appImageEffect = Vue.createApp({
    data() {
        return {
            selectedFilter: '', // Dynamic class binding for image element
            responsiveImg: 'responsiveImg' // Additional class for the image element
        };
    },
    methods: {
        applyImageFilter(filter) {
            // if the passed filter is the reset filter, clear the selectedFilter otherwise take the given filter class
            this.selectedFilter = filter === 'imgFilterReset' ? '' : filter;
        }
    }
});

// Mount the app to the DOM
appImageEffect.mount('#appImageFilter');