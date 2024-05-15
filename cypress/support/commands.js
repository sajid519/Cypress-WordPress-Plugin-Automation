// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// commands.js
/* Cypress.Commands.add('LoginPageMethod', () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
    cy.get("#btn-make-appointment").click()
    cy.contains("Please login to make appointment.").should("have.text", "Please login to make appointment.")
    cy.get("#txt-username").type("John Doe")
    cy.get("#txt-password").type("ThisIsNotAPassword")
    cy.get("#btn-login").click()
    cy.url().should("include", "/#appointment")
  }); */


   Cypress.Commands.add("LoginPage", (username, password) =>{
        cy.session([username,password], ()=>{
        //   cy.visit("https://dev.com/wpqa1/wordpress/wp-login.php")
         //  cy.visit("https://qa-sajid-2.alignpx.com/wordpress/wp-login.php")
           cy.visit('https://qa-sajid-2.alignpx.com/wp-admin')
           cy.get("#user_login").type(username)
           cy.get("#user_pass").type(password)
           cy.get("#wp-submit").click()
          cy.get("#menu-plugins").click()    // Plugins option of left side
          cy.get('[data-slug="ltl-freight-quotes-ups-edition"] > .plugin-title > .row-actions > .settings > a').click()   // setting button for plugin
        })
   })