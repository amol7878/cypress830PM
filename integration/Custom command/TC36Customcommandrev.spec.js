describe('use of custom command',()=>{
    it('Custom Command',()=>{
        cy.login2('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login','[name="username"]','[name="password"]','.orangehrm-login-button','Admin','admin123')
        cy.url().should('contain','dashboard')
    })

    it.only('Custom Command',()=>{
        cy.login2('https://www.saucedemo.com/','#user-name','#password','#login-button','standard_user','secret_sauce')
        cy.get('.app_logo').should('be.visible')
    })
})