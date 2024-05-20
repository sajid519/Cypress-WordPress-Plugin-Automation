import { WarehousePageElements } from "../Elements/Warehouse-Page.Elements";
import { WarehousePageConstants } from "../Constants/Warehouse-Page-Constant";

class LoginFunctionality {

      CreatedWarehouse = () =>{
          cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
          cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()
          cy.get(WarehousePageElements.warehouseButton).click()
          cy.get(WarehousePageElements.warehouseAddressField).type(WarehousePageConstants.warehouseAddress)
          cy.get(WarehousePageElements.warehouseZipCodeField).type(WarehousePageConstants.warehouseZip)
          cy.get(WarehousePageElements.warehouseCityField).type(WarehousePageConstants.warehouseCity)
          cy.get(WarehousePageElements.warehouseStateField).type(WarehousePageConstants.warehouseState)
          cy.get(WarehousePageElements.warehouseCountryField).type(WarehousePageConstants.warehouseCountry)
          cy.get(WarehousePageElements.warehouseSubmitButton).click()
          cy.get(WarehousePageElements.warehouseRowField).should("contain", WarehousePageConstants.warehouseZip)
      }


      UpdatedWarehouse = () =>{
        cy.get(WarehousePageElements.warehouseEditButton).click()
        cy.wait(2000)
        cy.get(WarehousePageElements.warehouseAddressField).clear().type(WarehousePageConstants.warehouseUpdatedAddress)
        cy.get(WarehousePageElements.warehouseZipCodeField).clear().type(WarehousePageConstants.warehouseUpdatedZip)
        cy.get(WarehousePageElements.warehouseCityField).clear().type(WarehousePageConstants.warehouseUpdatedCity)
        cy.get(WarehousePageElements.warehouseStateField).clear().type(WarehousePageConstants.warehouseUpdatedState)
        cy.get(WarehousePageElements.warehouseCountryField).type(WarehousePageConstants.warehouseCountry)
        cy.get(WarehousePageElements.warehouseSubmitButton).click()
        cy.get(WarehousePageElements.warehouseRowField).should("contain", WarehousePageConstants.warehouseUpdatedZip)
      }

      DeleteWarehouse = () =>{
          cy.get(WarehousePageElements.warehouseDeleteButton).click()
          cy.get(WarehousePageElements.warehouseBody).should("not.be.visible")
      }    


      CreatedDropShip = () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WarehousePageElements.pagesLink).contains(WarehousePageConstants.warehouseText).click()
        cy.get(WarehousePageElements.dropShipButton).click()
        cy.get(WarehousePageElements.dropShipNickName).type(WarehousePageConstants.dropShipNickName)
        cy.get(WarehousePageElements.dropShipAddressField).type(WarehousePageConstants.dropShipAddress)
        cy.get(WarehousePageElements.dropShipZipCodeField).type(WarehousePageConstants.dropShipZip)
        cy.get(WarehousePageElements.dropShipCityField).type(WarehousePageConstants.dropShipCity)
        cy.get(WarehousePageElements.dropShipStateField).type(WarehousePageConstants.dropShipState)
        cy.get(WarehousePageElements.dropShipCountryField).type(WarehousePageConstants.warehouseCity)
        cy.get(WarehousePageElements.dropShipSubmitButton).click()
        cy.get(WarehousePageElements.dropShipRowField).should("contain", WarehousePageConstants.dropShipZip)
      }


      UpdatedDropShip = () => {
        cy.get(WarehousePageElements.dropShipEditButton).click()
        cy.wait(2000)
        cy.get(WarehousePageElements.dropShipNickName).clear().type(WarehousePageConstants.dropShipUpdatedNickName)
        cy.get(WarehousePageElements.dropShipAddressField).clear().type(WarehousePageConstants.dropShipUpdatedAddress)
        cy.get(WarehousePageElements.dropShipZipCodeField).clear().type(WarehousePageConstants.dropShipUpdatedZip)
        cy.get(WarehousePageElements.dropShipCityField).clear().type(WarehousePageConstants.dropShipUpdatedCity)
        cy.get(WarehousePageElements.dropShipStateField).clear().type(WarehousePageConstants.dropShipUpdatedState)
        cy.get(WarehousePageElements.dropShipCountryField).type(WarehousePageConstants.warehouseCity)
        cy.get(WarehousePageElements.dropShipSubmitButton).click()
        cy.get(WarehousePageElements.dropShipRowField).should("contain", WarehousePageConstants.dropShipUpdatedZip)
      }

      DeletedDropShip = () => {
        cy.get(WarehousePageElements.dropShipDeleteButton).click()
        cy.get(WarehousePageElements.dropShipConfirmDeletion).contains("OK").click({force: true})
        cy.get(WarehousePageElements.dropShipBody).should("not.be.visible")
      }
}
export default LoginFunctionality;