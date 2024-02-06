describe('Verify cypress traverse methods',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('first,children,last,eq',()=>{
        cy.get('.cart').children().should('have.length',6)
        cy.get('.cart').children().first().should('contain','Free Access to InterviewQues/ResumeAssistance/Material')
        cy.get('.cart').children().last().should('have.class','cart-preview')
        cy.get('.cart').children().eq(2).should('have.text','Flight Booking')
    })
    it('Find,next',()=>{
        cy.get('.cart').find('a').should('have.length',4)
        cy.get('.search').find('form').should('have.class','search-form')
        cy.get('.greenLogo').next().should('have.class','search')
    })
    it.only('closest,filter,parent',()=>{
        cy.get('.checkoutKartModal').closest('div').should('have.class','modal-wrapper')
        cy.get('.modal-wrapper').closest('div').should('have.class','checkoutKartModal')
        cy.get('.search').closest('div').should('have.class','greenLogo')
        cy.get('.search').closest('div').should('have.class','cart')
        cy.get('.cart a').filter('.blinkingText').should('have.text','Free Access to InterviewQues/ResumeAssistance/Material')
        cy.get('.blinkingText').parent().should('have.class','cart')
    })
    it('nextAll,prev',()=>{
        cy.get('.decrement').first().nextAll().should('have.length',2)
        cy.get('.products-wrapper').nextAll().should('have.length',3)
    })
})