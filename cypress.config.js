const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qbq4wn",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  baseUrl: "https://rahulshettyacademy.com",
  // viewportHeight:550,
  // viewportWidth:660
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true
  },
});
