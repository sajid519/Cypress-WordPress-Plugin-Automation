import { WordpressLoginPageConstants } from "../../support/Constants/Wordpress-Login-Page-Constants.js";
import { WordpressLogiPageElements } from "../../support/Elements/Wordpress-Login-Page-Elements.js";

describe ("Wordpress Login", ()=>{
      
      beforeEach(()=>{
          cy.LoginPage("sajid", "7SAB%$lX")
      });

    context ("Test Connection Page", ()=>{
      it("Test Connection for Freight Class", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)   // license key field
        cy.get(WordpressLogiPageElements.freightClassCheckboxONTestConnection).check()        // Freight Class Checkbox
        cy.get(WordpressLogiPageElements.testConnectionButton).click()         // Test Connection button
        cy.get(WordpressLogiPageElements.successMessage).should("have.text", WordpressLoginPageConstants.successMessage)
      })

      it("Test Connection for Dimensions", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)   // license key field
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(WordpressLogiPageElements.successMessage).should("have.text", WordpressLoginPageConstants.successMessage)
      })

      it("Show error message on enter invalid license key", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
        cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.invalidLicenseKey)
        cy.get(WordpressLogiPageElements.freightClassCheckboxONTestConnection).check()       // Freight class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
      })  

      it("Verify alert messages when Client id is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
        cy.get(WordpressLogiPageElements.clientID).clear()
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(WordpressLogiPageElements.clientIdField).should("contain", WordpressLoginPageConstants.idAlertMessage)
      })

      it("Verify alert messages when Client Secret is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
         cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear()
        cy.get(WordpressLogiPageElements.licenseKey).clear().type(WordpressLoginPageConstants.licenseKey)
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(WordpressLogiPageElements.clientSecretField).should("contain", WordpressLoginPageConstants.secretAlertMessage)
      })

      it("Verify alert messages when license key is not enter", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.selectElement).select(WordpressLoginPageConstants.apiVersion).should("contain", WordpressLoginPageConstants.apiVersion)
         cy.get(WordpressLogiPageElements.clientID).clear().type(WordpressLoginPageConstants.clientID)     // client id field
        cy.get(WordpressLogiPageElements.clientSecret).clear().type(WordpressLoginPageConstants.clientSecret)   // client secret field
        cy.get(WordpressLogiPageElements.licenseKey).clear()
        cy.get(WordpressLogiPageElements.dimensionClassCheckboxOnTestConnection).check()       // Dimension class
        cy.get(WordpressLogiPageElements.testConnectionButton).click()
        cy.get(WordpressLogiPageElements.licenseField).should("contain", WordpressLoginPageConstants.licenseAlertMessage)
      })
    })


    context ("User Guide Page", ()=>{
      it("User should redirect to User Guide Page", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.pagesNavigation).contains(WordpressLoginPageConstants.userGuideLink).click()
        cy.url().should("eq", "https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes&section=section-3")
      })
           
      it("User Guide should be opened when use click on link", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.pagesNavigation).contains(WordpressLoginPageConstants.userGuideLink).click()
        cy.get(WordpressLogiPageElements.userGuidePage).invoke("removeAttr", "target").click()
      })     
    })

    context("Logs Page", ()=>{
      it("Log Page should be opened", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.pagesNavigation).contains(WordpressLoginPageConstants.logsPage).click()
      })
    })

    context("FreightDirect Tab", ()=>{
      it("User should redirect to FreighDirect Page", ()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.pagesNavigation).contains(WordpressLoginPageConstants.freightDirectPage).click()
      })

      it("User should be able to redirect to FreightDirect Website",()=>{
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(WordpressLogiPageElements.pagesNavigation).contains(WordpressLoginPageConstants.freightDirectPage).click()
        cy.get(WordpressLogiPageElements.fdoElement).contains(WordpressLoginPageConstants.textOfFreightDirect).invoke("removeAttr", "target").click()
      })
    })  
})