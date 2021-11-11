/// <reference types="Cypress" />
describe("about test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("about desktop test", () => {
    cy.viewport("macbook-13");
    cy.contains("About Us");
  });
  it("about mobile test", () => {
    cy.viewport("iphone-8");
    cy.contains("About Us");
  });
  it("about tablet test", () => {
    cy.viewport("ipad-2");
    cy.contains("About Us");
  });
});
