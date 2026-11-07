const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {  
    baseUrl: 'https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
