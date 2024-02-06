//https://example.cypress.io/commands/traversal
describe('verify the traverse methods', () => {

    it('To get descendant DOM elements of the selector, use the .find() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.cart').find('a').should('have.length',4)
       cy.get('.search').find('form').should('have.class','search-form')
    })
    it.only('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search').next().should('have.class','cart')
        cy.get('.wrapperOne').next().should('have.class','wrapperTwo')
        cy.get('.wrapperThree').next().should('have.class','action-block')
    })
})