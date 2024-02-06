

export class homepage {
    elements = {
        UserNameField: '[name="username"]',
        PasswordField: '[type="password"]',
        LoginBtn: '[type="submit"]',
        cartIkon: '[class="oxd-brand-banner"]',
        ForgotPass: '.orangehrm-login-forgot-header',
        SocialIcons: '.orangehrm-login-footer-sm',
        MainLogo:'[alt="company-branding"]'
    }
    login(UserName, Password) {
        cy.get(this.elements.UserNameField).type(UserName)
        cy.get(this.elements.PasswordField).type(Password)
        cy.get(this.elements.LoginBtn).click()
    }
    AfterValidation() {
        cy.get(this.elements.cartIkon).should('be.visible')
    }
    ForgotPassword() {
        cy.get(this.elements.ForgotPass).click()
        cy.url().should('contain', "requestPasswordResetCode")
        cy.get('.orangehrm-forgot-password-title').should("have.text","Reset Password")
    }
    SocialMediaIcons(){
        cy.get(this.elements.SocialIcons).children().should('have.length',4)
    }

    MainLogoPage(){
        cy.get(this.elements.MainLogo).should('be.visible')
    }
}