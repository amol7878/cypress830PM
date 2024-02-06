
//const fixData = require('../../fixtures/contact_us2')
import info from'../../fixtures/contact_us2'
describe('verify the fixture', () => {
         
        // info.forEach((el,index)=>{
         it('verify fixture with normal object object ${index}', () => {
        // cy.visit('https://codenboxautomationlab.com/contact/')
        // cy.get('#nf-field-1').type(el.name)
        // cy.get('#nf-field-2').type(el.Email)
        // cy.get('[id="nf-field-3"]').type(el.msg)
        // cy.get('#nf-field-4').click()
        // cy.wait(17000)//17 sec
        // cy.get('.nf-response-msg').children().first().should('have.text', 'Form submitted successfully.')
        // cy.get('.nf-response-msg>p').should('contain',el.Smsg)
    //  })
    //cy.log(fixData[0])
    cy.log(info)
 })
   it('test',()=>{
    //cy.log(fixData[1])
    cy.log(info)
   })
})
