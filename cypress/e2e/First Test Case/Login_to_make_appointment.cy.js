import {LoginPageConstants} from "../../support/Constants/Login-Page-Constants.js";
import {LoginPageElements} from "../../support/Elements/Login-Page-Elements.js";
import LoginPage from "../../support/Pages/Login-Page.js";

describe("login", ()=>{
  const loginPage = new LoginPage();
    
  /* it("Test Login", ()=>{
      cy.visit("https://katalon-demo-cura.herokuapp.com/")
      cy.get("#btn-make-appointment").click()
      cy.contains("Please login to make appointment.").should("have.text", "Please login to make appointment.")
      cy.get("#txt-username").type("John Doe")
      cy.get("#txt-password").type("ThisIsNotAPassword")
      cy.get("#btn-login").click()
      cy.url().should("include", "/#appointment")
    })  */

    it ("Appointment", ()=>{
     /* cy.visit("https://katalon-demo-cura.herokuapp.com/")
      cy.get(LoginPageElements.AppointmentButton).click()
      cy.contains(LoginPageConstants.VerifyText).should("have.text", "Please login to make appointment.")
      cy.get(LoginPageElements.UserName).type(LoginPageConstants.UserName)
      cy.get(LoginPageElements.Password).type(LoginPageConstants.Password)
      cy.get(LoginPageElements.LoginButton).click() 
      cy.url().should("include", "/#appointment") */
      loginPage.VerifyLogin();
      cy.get(LoginPageElements.SelectDropdown).select(2).should("have.value", "Seoul CURA Healthcare Center")
      cy.get(LoginPageElements.SelectCheckboxOfReadmission).check()   // Select the checkbox using a ID
      cy.get(LoginPageElements.SelectRadioButtonOfHealthCareProgram).check("Medicaid")   // Select the radion button using inside a checkbox
      cy.get(LoginPageElements.SelectVisitDate).click()
     cy.get(LoginPageElements.SelectDateFromCalender).contains(25).click()
      cy.get(LoginPageElements.CommentSection).type(LoginPageConstants.WriteTextInComment)
      cy.get(LoginPageElements.BookAppointmentButton).click()
     cy.url().should("include", "appointment.php#summary")
     cy.wait(200)  
    })     
})
    