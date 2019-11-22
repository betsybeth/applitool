/// <reference types="Cypress"/>


context("Login into demo applitools",   () => {
  before(() => {
      cy.visit("https://demo.applitools.com/index.html")
  })
  it("test logo should be visible", () => {
      cy.get(".logo-w > a > img")
      .should("be.visible")
      .should("have.attr", "src").and("match", /logo-big.png/)

  })
 it("Test if login button is visible ", () => {
     cy.get("#log-in")
       .should("be.visible")
       .should("have.text", "Sign in")
    })

  it("Test if Login form text exists", () => {
      cy.get(".auth-header")
      .should("exist")
      .should("have.text", '\n        Login Form\n      ')
      .should("have.css", "color", "rgb(51, 65, 82)")
      
  })  
  it("test remember me checkbox", () => {
    cy.get('.form-check-input').should("exist")
    cy.get(".form-check-label").should("have.text", "Remember Me")

  })
  it("test should have facebook, twitter, linkedin icons", () => {
    cy.get('[style="display: inline-block; margin-bottom:4px;"] > img')
    .should("exist")
    .should("have.attr", "src").and("match", /twitter.png/)
    cy.get(':nth-child(2) > img')
    .should("exist")
    .should("have.attr", "src").and("match", /facebook.png/)
    cy.get(":nth-child(3) > img")
    .should("exist")
    .should("have.attr", "src").and("match", /linkedin.png/)

  })
  it("test username and password labels should be visible" , () => {
    cy.get(':nth-child(1) > label')
    .should("have.text", "Username")
    cy.get('form > :nth-child(2) > label')
    .should("have.text", "Password")
  })
  it("test icons on username and password", () => {
    cy.get(':nth-child(1) > .pre-icon').should("be.visible")
    cy.get(':nth-child(2) > .pre-icon').should("be.visible")
  })
})