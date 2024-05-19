import { QuoteSettingPageElements } from "../../support/Elements/QuoteSetting-Page-Constants";
import { QuoteSettingPageConstants } from "../../support/Constants/QuoteSetting-Page-Constants";

describe('Verify Quote Setting Page', () => {

    beforeEach(() => {
        cy.LoginPage('sajid', '7SAB%$lX')
    })


    it("Verify that Quote Setting Option should be visible", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).should("contain", QuoteSettingPageConstants.quoteSetting)
    })

    it("Verify the Label As Input Field", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.labelAsField).clear().type(QuoteSettingPageConstants.carrierName)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.labelAsField).should("have.value", QuoteSettingPageConstants.carrierName)
    })

    it("Verify that Don't sort shipping methods by price Option should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.doNotSortMethod).check().should("be.checked")
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.doNotSortMethod).should("be.checked")
    })

    it("Verify that Always Quote Residential Delivery should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.residentialCheckbox).check().should("be.checked")
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.residentialCheckbox).should("be.checked")
    })

    it("Verify that Always quote lift gate delivery should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.liftGateCheckbox).check().should("be.checked")
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.liftGateCheckbox).should("be.checked")
    })

    it("Verify that Offer Lift Gate delivery should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.liftGateAsOptionCheckbox).check().should("be.checked")
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.liftGateAsOptionCheckbox).should("be.checked")
    })

    it("Verify that user should be able to enter values in Handling Unit ", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.handlingUnit).clear().type(QuoteSettingPageConstants.handlingValue)
        cy.get(QuoteSettingPageElements.maximumHandlingUnit).clear().type(QuoteSettingPageConstants.maximumHandlingValue)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.handlingUnit).should("have.value", QuoteSettingPageConstants.handlingValue)
        cy.get(QuoteSettingPageElements.maximumHandlingUnit).should("have.value", QuoteSettingPageConstants.maximumHandlingValue)
    })

    it("Verify the Hanlding Fee markup on quote setting", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.handlingMarkupFee).clear().type(QuoteSettingPageConstants.markupFee)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.handlingMarkupFee).should("have.value", QuoteSettingPageConstants.markupFee)
    })

    it("Verify that Enable logs should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.logsCheckbox).check().should("be.checked")
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.logsCheckbox).should("be.checked")
    })

    it("Verify the Show WooCommerce Shipping Options should be selected", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.allowOtherPlugin).select("no").should("have.value", QuoteSettingPageConstants.showWoocommerceValue)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.allowOtherPlugin).should("have.value", QuoteSettingPageConstants.showWoocommerceValue)
    })

    it("Verify that Weight Threshold should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.weightThreshold).check().should("be.checked")
        cy.get(QuoteSettingPageElements.thresholdInputField).clear().type(QuoteSettingPageConstants.thresholdValue)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.thresholdInputField).should("have.value", QuoteSettingPageConstants.thresholdValue)
    })

    it("Verify the Relation to Shipper Options should be selected", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.relationToShipper).select("thirdparty").should("have.value", QuoteSettingPageConstants.thirdPartyValue)
        cy.get(QuoteSettingPageElements.thirdPartyPostalCode).click({ force: true }).type(QuoteSettingPageConstants.thirdPartyPostalCode)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.relationToShipper).should("have.value", QuoteSettingPageConstants.thirdPartyValue)
    })

    it("Verify the radio button of Checkout options if the plugin fails to return a rate should be checked", () => {
        cy.visit("/")
        cy.get(QuoteSettingPageElements.pagesTab).contains(QuoteSettingPageConstants.quoteSetting).click()
        cy.get(QuoteSettingPageElements.pluginFailed).check().should("be.checked")
        cy.get(QuoteSettingPageElements.inputFieldForPluginFailed).clear().type(QuoteSettingPageConstants.inputTextOfPluginFailed)
        cy.get(QuoteSettingPageElements.submitButton).click()
        cy.get(QuoteSettingPageElements.inputFieldForPluginFailed).should("have.text", QuoteSettingPageConstants.inputTextOfPluginFailed)
    })
})