/// <reference types="Cypress" />

const urls = [
  "/powerlifting-competition",
  "/mma-competition",
  "/photoshoot-competition",
  "/gallery/all",
  "/gallery/gym",
  "/gallery/competition",
  "/gallery/nature",
  "/gallery/leisure",
];
// todo get pages automatically

describe("Accessibility tests for home page", () => {
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
describe("Accessibility tests for event", () => {
  beforeEach(() => {
    cy.visit("/event").get("main").injectAxe();
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
describe("Accessibility tests for gallery", () => {
  beforeEach(() => {
    cy.visit("/gallery").get("main").injectAxe();
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

describe("Accessibility tests subpages", () => {
  urls.forEach((url) => {
    it(`Accessibility tests on ${url}`, () => {
      cy.visit(url).get("main").injectAxe();
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
});
