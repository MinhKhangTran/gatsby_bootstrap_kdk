/// <reference types="Cypress" />
describe("Hero test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Hero desktop test", () => {
    cy.viewport("macbook-13");
    cy.get(".kasten").should("be.visible");
    cy.get("h1.text-uppercase").should("be.visible");
    cy.contains("Your local KDK club to reach your total goals").should(
      "be.visible"
    );
    cy.get("button.mt-3").should("be.visible");
    cy.get(".hero_text > .mt-5").should("be.visible");
    cy.get(".d-flex.hero_socials").children().should("have.length", 3);
    cy.get(
      ".selected > .hero_image_wrapper > .gatsby-image-wrapper > div"
    ).should("be.visible");
  });
  it("Hero mobile test", () => {
    cy.viewport("iphone-8");
    cy.get(".kasten").should("be.visible");
    cy.get("h1.text-uppercase").should("be.visible");
    cy.contains("Your local KDK club to reach your total goals").should(
      "be.visible"
    );
    cy.get("button.mt-3").should("be.visible");
    cy.get(".hero_text > .mt-5").should("be.visible");
    cy.get(".d-flex.hero_socials").children().should("have.length", 3);
    cy.get(
      ".selected > .hero_image_wrapper > .gatsby-image-wrapper > div"
    ).should("be.visible");
  });
  it("Hero tablet test", () => {
    cy.viewport("ipad-2");
    cy.get(".kasten").should("be.visible");
    cy.get("h1.text-uppercase").should("be.visible");
    cy.contains("Your local KDK club to reach your total goals").should(
      "be.visible"
    );
    cy.get("button.mt-3").should("be.visible");
    cy.get(".hero_text > .mt-5").should("be.visible");
    cy.get(".d-flex.hero_socials").children().should("have.length", 3);
    cy.get(
      ".selected > .hero_image_wrapper > .gatsby-image-wrapper > div"
    ).should("be.visible");
  });
});
