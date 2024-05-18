import LoginFunctionality from "../../support/Pages/Wordpress-Login-page";

describe('Verify Quote Setting Page', () => {

    // const checkLogin = new LoginFunctionality();

    beforeEach(() => {
        cy.LoginPage('sajid', '7SAB%$lX')
    })


    it("Verify that Quote Setting Option should be visible", () => {
       // cy.visit("https://dev.com/wpqa1/wordpress/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").should("contain", "Quote Settings")
    })

    it("Verify the Label As Input Field", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_setting_label_as").clear().type("TForce Freight")
        cy.get('.submit').click()
        cy.get("#ups_freight_setting_label_as").should("have.value", "TForce Freight")
    })

    it("Verify that Don't sort shipping methods by price Option should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#shipping_methods_do_not_sort_by_price").check().should("be.checked")
        cy.get('.submit').click()
        cy.get("#shipping_methods_do_not_sort_by_price").should("be.checked")
    })

    it("Verify that Always Quote Residential Delivery should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_setting_residential").check().should("be.checked")
        cy.get('.submit').click()
        cy.get("#ups_freight_setting_residential").should("be.checked")
    })

    it("Verify that Always quote lift gate delivery should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_settings_liftgate").check().should("be.checked")
        cy.get('.submit').click()
        cy.get("#ups_freight_settings_liftgate").should("be.checked")
    })

    it("Verify that Offer Lift Gate delivery should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_quotes_liftgate_delivery_as_option").check().should("be.checked")
        cy.get('.submit').click()
        cy.get("#ups_freight_quotes_liftgate_delivery_as_option").should("be.checked")
    })

    it("Verify that user should be able to enter values in Handling Unit ", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_settings_handling_weight").clear().type("100")
        cy.get("#ups_freight_maximum_handling_weight").clear().type("500")
        cy.get('.submit').click()
        cy.get("#ups_freight_settings_handling_weight").should("have.value", "100")
        cy.get("#ups_freight_maximum_handling_weight").should("have.value", "500")
    })

    it("Verify the Hanlding Fee markup on quote setting", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_settings_handling_fee").clear().type("1000")
        cy.get('.submit').click()
        cy.get("#ups_freight_settings_handling_fee").should("have.value", "1000")
    })

    it("Verify that Enable logs should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_enale_logs").check().should("be.checked")
        cy.get('.submit').click()
        cy.get("#ups_freight_enale_logs").should("be.checked")
    })


    it("Verify the Show WooCommerce Shipping Options should be selected", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_settings_allow_other_plugins").select("no").should("have.value", "no")
        cy.get('.submit').click()
        cy.get("#ups_freight_settings_allow_other_plugins").should("have.value", "no")
    })


    it("Verify that Weight Threshold should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#en_plugins_return_LTL_quotes").check().should("be.checked")
        cy.get("#en_weight_threshold_lfq").clear().type("50")
        cy.get('.submit').click()
        cy.get("#en_weight_threshold_lfq").should("have.value", "50")
    })


    it("Verify the Relation to Shipper Options should be selected", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("#ups_freight_relation_to_shipper").select("thirdparty").should("have.value", "thirdparty")
        cy.get("#ups_freight_thirdparty_postal_code").click({ force: true }).type("32566")
        cy.get('.submit').click()
        cy.get("#ups_freight_relation_to_shipper").should("have.value", "thirdparty")
    })


    it("Verify the radio button of Checkout options if the plugin fails to return a rate should be checked", () => {
        cy.visit("https://qa-sajid-2.alignpx.com/wp-admin/admin.php?page=wc-settings&tab=ups_freight_quotes")
        cy.get(".subsubsub").contains("Quote Settings").click()
        cy.get("[value='prevent']").check().should("be.checked")
        cy.get("[name='prevent_proceed_checkout_eniture']").clear().type("There are no shipping methods available for the address provided")
        cy.get('.submit').click()
        cy.get("[name='prevent_proceed_checkout_eniture']").should("have.text", "There are no shipping methods available for the address provided")
    })
})