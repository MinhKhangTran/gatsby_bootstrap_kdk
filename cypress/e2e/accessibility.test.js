/// <reference types="Cypress" />
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Check mobile viewport for a11y", () => {
    cy.viewport("iphone-8");
    cy.checkA11y();
  });
  it("Check tablet viewport for a11y", () => {
    cy.viewport("ipad-2");
    cy.checkA11y();
  });
});
