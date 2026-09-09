const demoChangeLanguage = Vue.createApp({
    data() {
        return {
            demoSelectedLanguage: 'en',
            translations: null, // Object to store translations
            baseDir: null // Base directory for JSON files
        };
    },
    methods: {
        demoFetchJsonContent() {
            const filePath = `${this.baseDir}/json/demoMultilang.json`;
            console.log(filePath);
            fetch(filePath)
                .then(response => response.json())
                .then(data => {
                    this.translations = data;
                    // Call the updateContent function here, passing both language and pageName
                    this.demoUpdateContent();
                })
                .catch(error => console.error('Error fetching JSON:', error));
        },
        demoUpdateContent() {
            if (this.translations) {
                document.documentElement.lang = this.demoSelectedLanguage;
                document.querySelectorAll('[demo-i18n]').forEach(element => {
                    const key = element.getAttribute('demo-i18n');
                    element.innerHTML = this.translations[this.demoSelectedLanguage][key];
                });
            }
        }
    },
    mounted() {
        const currentUrl = window.location.href;
        this.baseDir = currentUrl.split("/").slice(0, -2).join("/");
        this.demoFetchJsonContent(this.baseDir);
    },
    watch: {
        demoSelectedLanguage() {
            this.demoUpdateContent();
        }
    }
});

demoChangeLanguage.mount('#demoChangeLanguage');
  