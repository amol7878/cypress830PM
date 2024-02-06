describe('Verify the login functionality',()=>{

    it('Verify the login functionality with valid credentials',()=>{
        cy.login('standard_user','secret_sauce')
        cy.url().should('contains','inventory')
        cy.get('.app_logo').should('be.visible')
        cy.get('.title').should('have.text','Products')
    })
})