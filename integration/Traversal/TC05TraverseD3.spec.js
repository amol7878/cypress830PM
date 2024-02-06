//https://example.cypress.io/commands/traversal
describe('verify the traverse methods', () => {
        //1)closest()
        //2)Filter()
        //3)Parent()
    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.checkoutKartModal').closest('div').should('have.class','modal-wrapper')
       
    })
    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.cart>a').filter('.blinkingText').should('have.text','Free Access to InterviewQues/ResumeAssistance/Material')
       
    })
    it.only('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('.blinkingText').parent().should('have.class','cart')
       cy.get('.cart').parent().should('have.class','container')
       
    })
})