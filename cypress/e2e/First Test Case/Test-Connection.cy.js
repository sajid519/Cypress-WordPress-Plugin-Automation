import { WordpressLoginPageConstants } from "../../support/Constants/Wordpress-Login-Page-Constants.js";
import { WordpressLogiPageElements } from "../../support/Elements/Wordpress-Login-Page-Elements.js";
import LoginFunctionality from "../../support/Pages/Wordpress-Login-page.js";

describe ("Wordpress Login", ()=>{
      
      beforeEach(()=>{
          cy.LoginPage("sajid", "7SAB%$lX")
      });

    context ("Test Connection Page", ()=>{
      it("Test Connection for Freight Class", ()=>{
      //  cy.visit("https://dev.com/wpqa1/wordpress/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)   // license key field
        cy.get(WordpressLogiPageElements.freightClassCheckboxONTestConnection).check()        // Freight Class Checkbox
        cy.get(WordpressLogiPageElements.testConnectionButton).click()         // Test Connection button
        cy.get(WordpressLogiPageElements.successMessage).should("have.text", WordpressLoginPageConstants.successMessage)
      })

      it("Test Connection for Dimensions", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)   // license key field
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(WordpressLogiPageElements.successMessage).should("have.text", WordpressLoginPageConstants.successMessage)
      })

      it("Show error message on enter invalid license key", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.invalidLicenseKey)
        cy.get(WordpressLogiPageElements.freightClassCheckboxONTestConnection).check()       // Freight class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
     // cy.get('div.notice.notice-error.ups_freight_error_message').should('have.text', 'Error! Plugin license key is invalid for this domain.'.trim());
     // cy.get(WordpressLogiPageElements.errorMessageOfInvalidLicenseKey).should("have.text", WordpressLoginPageConstants.invalidLicenseKeyErrorMessage.trim());
    //  cy.get(WordpressLogiPageElements.errorMessageOfInvalidLicenseKey).should("have.text", "Error! Plugin license key is invalid for this domain.")
      })  

      it("Verify alert messages when Client id is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
        cy.get(WordpressLogiPageElements.clientID).clear()
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(":nth-child(2) > .forminp").should("contain", "Client ID is required.")
      })

      it("Verify alert messages when Client Secret is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
         cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear()
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(":nth-child(3) > .forminp").should("contain", "Client Secret is required.")
      })


      it("Verify alert messages when license key is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get("select").select("New API").should("contain", "New API")
         cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear()
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(":nth-child(10) > .forminp").should("contain", "Plugin License Key is required.")
      })
    })


    context ("User Guide Page", ()=>{
      it("User should redirect to User Guide Page", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("User Guide").click()
        cy.url().should("eq", "https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes&section=section-3")
      })
      
      
      it("User Guide should be opened when use click on link", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("User Guide").click()
        cy.get(".user_guide > :nth-child(1) > a").invoke("removeAttr", "target").click()
        cy.wait(5000)
       // cy.url().should('include', 'https://eniture.com/woocommerce-tforce-ltl-freight/#documentation')
     //  cy.url().should('include', 'https://eniture.com/woocommerce-tforce-ltl-freight/#documentation')
      })
        
    })


    context("Logs Page", ()=>{
      it("Log Page should be opened", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Logs").click()
       // cy.wait(4000)
        cy.url().should("eq", "https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes&section=en-logs")
      })
    })


    context("FreightDirect Tab", ()=>{
      it("User should redirect to FreighDirect Page", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("FreightDesk Online").click()
      //  cy.url().should("eq", "https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes&section=section-4")
      })

      it("User should be able to redirect to FreightDirect Website",()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("FreightDesk Online").click()
        cy.get(".user_guide_fdo").contains("freightdesk.online").invoke("removeAttr", "target").click()
      //  cy.wait(5000)
        //cy.url().should("eq", "https://freightdesk.online/")
      })
    })  
})