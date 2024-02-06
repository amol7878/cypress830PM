
import { homepage } from '../../support/OrangeHrm/LoginPage'

describe("Validate The Login Page", () => {
    let home = new homepage
    beforeEach(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Validate Login Functionality with Valid Credintials", () => {

        home.login("Admin", "admin123")
        home.AfterValidation()
    })

    it("Validate Login Functionality with InValid Credintials", () => {

        home.login("Admin", "admin12345")
        cy.get('[class="oxd-alert oxd-alert--error"]').should('be.visible')
    })

    it("Verify the Forgot Password Functionality",()=>{
        home.ForgotPassword()
    })

    it("Verify the Social Media Icons on Homepage",()=>{
        home.SocialMediaIcons()
    })

    it.only('Verify Main Brand On HomePage',()=>{
       home.MainLogoPage()
    })
})