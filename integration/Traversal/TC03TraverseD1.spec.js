

//https://example.cypress.io/commands/traversal
describe('verify the traverse methods', () => {

    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(4000)
        cy.get('.product-name').first().should('have.text', 'Brocolli - 1 Kg')
    })
    
    it('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-header-navlink ').last().should('have.text','Flight Booking')
        cy.get('.cart-header-navlink ').first().should('contain','InterviewQues')
    })

    it.only('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')  
        cy.get('.cart-header-navlink ').eq(1).should('have.text','Top Deals')
        cy.wait(4000)
        cy.get('.product-name').eq(5).should('have.text','Tomato - 1 Kg')
    })
    it('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') 
        cy.get('.container').last().children().should('have.length',3)
        cy.get('.container').first().children().should('have.length',5)
        cy.get('.cart').children().should('have.length',6)
        cy.get('.cart').children().last().should('have.class','cart-preview')
    })

    


})