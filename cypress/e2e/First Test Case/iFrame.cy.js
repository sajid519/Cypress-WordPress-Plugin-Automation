describe('iFrame', ()=>{
     it ("Test iFrame", ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap);
    
        iframe.clear().type("Welcome {ctrl+a}")    
        cy.get("[aria-label='Bold']").click()
        cy.get("[aria-label='Italic']").click()
        cy.get("[aria-label='Align center']").click()
    })
})