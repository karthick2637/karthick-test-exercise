const { Before } = require("cypress-cucumber-preprocessor/steps");

Before(() => {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});