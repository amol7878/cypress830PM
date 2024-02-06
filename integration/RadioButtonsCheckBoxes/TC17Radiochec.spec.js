describe('verify the radio checkbox functionality',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('verify the checkboxes with click method',()=>{
        cy.get('[value="red"]').check().should('be.checked')
        //cy.get('[value="red"]').uncheck().should('not.be.checked')
        cy.get('[value="red"]').click().should('not.be.checked')
    })
    it('check the functionality of radio buttons',()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').first().should('have.attr','checked')
    })
    it.only('check the radio buttons one by one',()=>{
        cy.get('[type="radio"]').each((el)=>{
            cy.wrap(el).check().should('be.checked')
        })
    })
})