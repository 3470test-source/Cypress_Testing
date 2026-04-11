const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  testIsolation: false,

  },
});
