   Cypress.Commands.add("LoginPage", (username, password) =>{
        cy.session([username,password], ()=>{
           cy.visit('https://qa-sajid-2.alignpx.com/wp-admin')
           cy.get("#user_login").type(username)
           cy.get("#user_pass").type(password)
           cy.get("#wp-submit").click()
          cy.get("#menu-plugins").click()    // Plugins option of left side
          cy.get('[data-slug="ltl-freight-quotes-ups-edition"] > .plugin-title > .row-actions > .settings > a').click()   // setting button for plugin
        })
   })