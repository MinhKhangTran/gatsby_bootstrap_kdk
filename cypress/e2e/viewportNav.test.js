/// <reference types="Cypress" />
describe("Check if nav toggle in mobile view", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Check for toggleable nav in mobile view", () => {
    cy.viewport("iphone-8");
    cy.get("[data-cy=nav_button]").click();
    cy.get("[data-cy=nav_collapse]").should("be.visible");
  });
});
