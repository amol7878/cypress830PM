describe('Verify the contact us functionality',()=>{

    it('Validate  contact us functionality',()=>{
     //Step 1 Visit the apps
     cy.visit('https://codenboxautomationlab.com/contact/')

     //Step 2 Find NameField css selector nd perform type action
     cy.get('#nf-field-1').type('Mahesh Aher')

     //Step 3 Find emailField css selector nd perform type action
     cy.get('#nf-field-2').type('ABC@gmail.com')

     //Step 4 Find msglField css selector nd perform type action
     cy.get('[id="nf-field-3"]').type('Hello I am Mahesh From Minskole')

     //Step 5 click on Submit button
     cy.get('#nf-field-4').click()
     cy.wait(17000)//17 sec

     //Step 6 Validate the sucess msg
     //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
     cy.get('.nf-response-msg>p').should('contain','Form submitted successfully.')
    })
})