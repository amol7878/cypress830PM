//https://example.cypress.io/commands/traversal

//First()
//Last()
//Eq()===>
//Children==>
//Find
//Filter
//Parent
//Next()
//Closest()
//Next all
//Prev

describe('Verify the Cypress traverse methods', () => {
    it.only('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.product-name').eq(5).should('have.text', 'Tomato - 1 Kg')
    })

    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(5000)
        cy.get('.products').children().should('have.length', 30)
        cy.get('.products').first().children().should('have.length', 5)
    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.decrement').first().nextAll().should('have.length', 2)
        cy.get('.blinkingText').nextAll().should('have.length', 5)
    })
    it.only('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-preview').prev().should('have.class', 'cart-icon')
        cy.get('.search').prev().should('have.class', 'brand')
    })

})

//cy.get('[href="#offers"]').parents().should('have.class','cart')
//cy.get('.search').parentsUntil('#root').should('have.length',3)
//cy.get('.cart-info').parentsUntil('#root').should('have.length',4)
//cy.get('.cart>a').not('.cart-icon').should('have.length',3)

//.nextUntil()
//.not
//.parents()
//.parentsUntil()
//.prevAll()
//.prevUntil()