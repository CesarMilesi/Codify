const burgerMenu = Vue.createApp({
  methods: {
    burgerMenuActive() {
      const burgerVue = this.$refs.burgerVue;
      if (!burgerVue) {
        console.error('Element with ref="burgerVue" not found.');
        return;
      }
      const links = burgerVue.querySelectorAll("nav li");
      const navbar = this.$el.querySelector(".navbar");

      burgerVue.classList.toggle("active");

      links.forEach((link) => {
        link.addEventListener("click", () => {
          navbar.classList.remove("active");
        });
      });
    },
  },
});

burgerMenu.mount('#navigation');