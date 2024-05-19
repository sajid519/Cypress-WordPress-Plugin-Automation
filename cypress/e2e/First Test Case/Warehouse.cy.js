import LoginFunctionality from "../../support/Pages/Wordpress-Login-page";
import { WarehousePageElements } from "../../support/Elements/Warehouse-Page.Elements";
import { WarehousePageConstants } from "../../support/Constants/Warehouse-Page-Constant";

describe("Warehouse", () => {

  const checkLogin = new LoginFunctionality();

  beforeEach(() => {
    cy.LoginPage('sajid', '7SAB%$lX')
  });

  it("Verify that Warehosue Option should Exist", () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(WarehousePageElements.pagesLink).should("contain", WarehousePageConstants.warehouseText)
  })

  it('Checks if all table headings of Warehouse are present', () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()
    cy.get(WarehousePageElements.tableHeadOfWarehouse).then(($thead) => { 
      const headings = $thead.find('th');
      const headingTexts = headings.map((index, element) => Cypress.$(element).text().trim()).get();
      const expectedHeadings = ['City', 'State', 'Zip', 'Country', 'Action']; 
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
    cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()
    cy.get(WarehousePageElements.warehouseButton).click()
    cy.get(WarehousePageElements.warehouseSubmitButton).click()
    cy.get(WarehousePageElements.InputFields).eq(1).should("have.text", WarehousePageConstants.zipReqired)
    cy.get(WarehousePageElements.InputFields).eq(2).should("have.text", WarehousePageConstants.CityRequired)
    cy.get(WarehousePageElements.InputFields).eq(4).should("have.text", WarehousePageConstants.stateRequired)
    cy.get(WarehousePageElements.InputFields).eq(5).should("have.text", WarehousePageConstants.countryRequired)
  })

  it('Checks if all table headings of Drop Ship are present', () => {
    cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
    cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()

    cy.get(WarehousePageElements.tableHeadOfDropShip).then(($thead) => {
      const headings = $thead.find('th');
      const headingTexts = headings.map((index, element) => Cypress.$(element).text().trim()).get();
      const expectedHeadings = ['Nickname', 'City', 'State', 'Zip', 'Country', 'Action']; // Update this with your expected headings
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
    cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()
    cy.get(WarehousePageElements.dropShipButton).click()
    cy.get(WarehousePageElements.dropShipSubmitButton).click()
    cy.get(WarehousePageElements.InputFields).eq(9).should("have.text", WarehousePageConstants.zipReqired)
    cy.get(WarehousePageElements.InputFields).eq(10).should("have.text", WarehousePageConstants.CityRequired)
    cy.get(WarehousePageElements.InputFields).eq(11).should("have.text", WarehousePageConstants.stateRequired)
    cy.get(WarehousePageElements.InputFields).eq(12).should("have.text", WarehousePageConstants.countryRequired)
  })     
})