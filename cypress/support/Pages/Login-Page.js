import {LoginPageConstants} from "../Constants/Login-Page-Constants.js";
import {LoginPageElements} from "../Elements/Login-Page-Elements.js";

class LoginPage {
          
        VerifyLogin = () => {
                cy.visit("https://katalon-demo-cura.herokuapp.com/")
                cy.get(LoginPageElements.AppointmentButton).click()
                cy.contains(LoginPageConstants.VerifyText).should("have.text", "Please login to make appointment.")
                cy.get(LoginPageElements.UserName).type(LoginPageConstants.UserName)
                cy.get(LoginPageElements.Password).type(LoginPageConstants.Password)
                cy.get(LoginPageElements.LoginButton).click() 
                cy.url().should("include", "/#appointment")
        };

}
export default LoginPage;