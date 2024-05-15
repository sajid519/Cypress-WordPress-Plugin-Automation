import { WordpressLogiPageElements, } from "../Elements/Wordpress-Login-Page-Elements.js";
import { WordpressLoginPageConstants } from "../Constants/Wordpress-Login-Page-Constants.js";

class LoginFunctionality {
   /*   WordpressLogin = () =>{
        cy.visit("https://dev.com/wpqa1/wordpress/wp-login.php")
        cy.get(WordpressLogiPageElements.userName).type(WordpressLoginPageConstants.name)
        cy.get(WordpressLogiPageElements.password).type(WordpressLoginPageConstants.name)
        cy.get(WordpressLogiPageElements.login).click()
        cy.get(WordpressLogiPageElements.pluginOption).click()    // Plugins option of left side
        cy.get(WordpressLogiPageElements.settingButtonOfPlugin).click()   // setting button for plugin
      }  */  //   Now this method is not in use becasue we create a custome comman for login in commands.js

      
      CreatedWarehouse = () =>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Warehouses").click()
          cy.get("[title='Add Warehouse']").click()
          cy.get("[name='en_wd_origin_address']").type("320 W. Lanier Ave, Ste 200")
          cy.get("[name='en_wd_origin_zip']").type("30214")
          cy.get("[name='en_wd_origin_city']").type("Fayetteville")
          cy.get("[name='en_wd_origin_state']").type("GA")
          cy.get("[name='en_wd_origin_country']").type("US")
          cy.get("[name='en_wd_submit_warehouse']").click()
          cy.get("#append_warehouse").should("contain", "30214")
      }


      UpdatedWarehouse = () =>{
        cy.get(".en_wd_warehouse_list_data [title='Edit']").click()
        cy.wait(2000)
        cy.get("[name='en_wd_origin_address']").clear().type("3818 W Branch Rd")
        cy.get("[name='en_wd_origin_zip']").clear().type("14706")
        cy.get("[name='en_wd_origin_city']").clear().type("Allegany")
        cy.get("[name='en_wd_origin_state']").clear().type("NY")
        cy.get("[name='en_wd_origin_country']").type("US")
        cy.get("[name='en_wd_submit_warehouse']").click()
        cy.get("#append_warehouse").should("contain", "14706")
      }

      DeleteWarehouse = () =>{
          cy.get(".en_wd_warehouse_list_data [title='Delete']").click()
          cy.get("#append_warehouse tbody").should("not.be.visible")
      }

      CreatedDropShip = () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Warehouses").click()
        cy.get("[title='Add Drop Ship']").click()
        cy.get("[name='en_wd_dropship_nickname']").type("Park View City")
        cy.get("[name='en_wd_dropship_address']").type("Georgia park")
        cy.get("[name='en_wd_dropship_zip']").type("30303")
        cy.get("[name='en_wd_dropship_city']").type("Atlanta")
        cy.get("[name='en_wd_dropship_state']").type("GA")
        cy.get("[name='en_wd_dropship_country']").type("US")
        cy.get("[name='en_wd_submit_dropship']").click()
        cy.get("#append_dropship").should("contain", "30303")
      }


      UpdatedDropShip = () => {
        cy.get(".en_wd_dropship_list_data [title='Edit']").click()
        cy.wait(2000)
        cy.get("[name='en_wd_dropship_nickname']").clear().type("Cardwell City")
        cy.get("[name='en_wd_dropship_address']").clear().type("320 W. Lanier Ave")
        cy.get("[name='en_wd_dropship_zip']").clear().type("07006")
        cy.get("[name='en_wd_dropship_city']").clear().type("West Caldwell")
        cy.get("[name='en_wd_dropship_state']").clear().type("NJ")
        cy.get("[name='en_wd_dropship_country']").type("US")
        cy.get("[name='en_wd_submit_dropship']").click()
        cy.get("#append_dropship").should("contain", "07006")
      }

      DeletedDropShip = () => {
        cy.get(".en_wd_dropship_list_data [title='Delete']").click()
        cy.get(".confirm_delete").contains("OK").click({force: true})
        cy.get("#append_dropship tbody").should("not.be.visible")
      }
}
export default LoginFunctionality;