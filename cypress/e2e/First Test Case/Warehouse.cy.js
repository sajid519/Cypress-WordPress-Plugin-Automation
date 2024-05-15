import LoginFunctionality from "../../support/Pages/Wordpress-Login-page";

describe("Warehouse", () => {

  const checkLogin = new LoginFunctionality();

  beforeEach(() => {
    cy.LoginPage('sajid', '7SAB%$lX')
  });

  it("Verify that Warehosue Option should Exist", () => {
   // cy.visit("https://dev.com/wpqa1/wordpress/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(".subsubsub").should("contain", "Warehouses")
  })



  it('Checks if all table headings of Warehouse are present', () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(".subsubsub").contains("Warehouses").click()

    // Select the table head (thead) of the table
    cy.get('#append_warehouse thead').then(($thead) => {
      // Find all table headings within the table head
      const headings = $thead.find('th');

      // Store the text content of each table heading in an array
      const headingTexts = headings.map((index, element) => Cypress.$(element).text().trim()).get();

      // List of expected table headings
      const expectedHeadings = ['City', 'State', 'Zip', 'Country', 'Action']; // Update this with your expected headings

      // Assertion: Check if all expected table headings are present in the single table head row
      // expect(headingTexts).to.deep.equal(expectedHeadings);
      expectedHeadings.forEach((heading) => {
        expect(headingTexts.includes(heading)).to.be.true;
      });
    });
  });


 it("Verify Warehouse should be Created", () => {
    checkLogin.CreatedWarehouse();
    checkLogin.DeleteWarehouse();
  })

  it("Verify Warehouse should be updated", () => {
    checkLogin.CreatedWarehouse();
    checkLogin.UpdatedWarehouse();
    checkLogin.DeleteWarehouse();
  })

  it("Verify all alert Messages for Warehouse", () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(".subsubsub").contains("Warehouses").click()
    cy.get("[title='Add Warehouse']").click()
    cy.get("[name='en_wd_submit_warehouse']").click()
    cy.get(".en_wd_err").eq(1).should("have.text", "Zip is required.")
    cy.get(".en_wd_err").eq(2).should("have.text", "City is required.")
    cy.get(".en_wd_err").eq(4).should("have.text", "State is required.")
    cy.get(".en_wd_err").eq(5).should("have.text", "Country is required.")
  })





  it('Checks if all table headings of Drop Ship are present', () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(".subsubsub").contains("Warehouses").click()

    // Select the table head (thead) of the table
    cy.get('#append_dropship thead').then(($thead) => {
      // Find all table headings within the table head
      const headings = $thead.find('th');

      // Store the text content of each table heading in an array
      const headingTexts = headings.map((index, element) => Cypress.$(element).text().trim()).get();

      // List of expected table headings
      const expectedHeadings = ['Nickname', 'City', 'State', 'Zip', 'Country', 'Action']; // Update this with your expected headings

      // Assertion: Check if all expected table headings are present in the single table head row
      // expect(headingTexts).to.deep.equal(expectedHeadings);
      expectedHeadings.forEach((heading) => {
        expect(headingTexts.includes(heading)).to.be.true;
      });
    });
  });


  it("Verify Drop Ship should be created", () => {
    checkLogin.CreatedDropShip();
    checkLogin.DeletedDropShip();
  })


  it("Verify Drop Ship should be updated", () => {
    checkLogin.CreatedDropShip();
    checkLogin.UpdatedDropShip();
    checkLogin.DeletedDropShip();
  })


  it("Verify all alert Messages for Drop Ship", () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(".subsubsub").contains("Warehouses").click()
    cy.get("[title='Add Drop Ship']").click()
    cy.get("[name='en_wd_submit_dropship']").click()
    cy.get(".en_wd_err").eq(9).should("have.text", "Zip is required.")
    cy.get(".en_wd_err").eq(10).should("have.text", "City is required.")
    cy.get(".en_wd_err").eq(11).should("have.text", "State is required.")
    cy.get(".en_wd_err").eq(12).should("have.text", "Country is required.")
  })     

})