describe("verify the fixture", () => {
    let info
    before(() => {
        cy.fixture('Contact_us').then((obj) => {
            info = obj
        })
    })
    // it('verify fixture with normal object', () => {
    //     //cy.log(info)
    //     cy.fixture('Contact_us').then((obj) => {
    //         cy.log(obj)
    //         //Step 1 Visit the apps
    //         cy.visit('https://codenboxautomationlab.com/contact/')

    //         //Step 2 Find NameField css selector nd perform type action
    //         cy.get('#nf-field-1').type(obj.name)

    //         //Step 3 Find emailField css selector nd perform type action
    //         cy.get('#nf-field-2').type(obj.Email)

    //         //Step 4 Find msglField css selector nd perform type action
    //         cy.get('[id="nf-field-3"]').type(obj.msg)

    //         //Step 5 click on Submit button
    //         cy.get('#nf-field-4').click()
    //         cy.wait(17000)//17 sec
    //     //Step 6 Validate the sucess msg
    //     //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
    //     cy.get('.nf-response-msg>p').should('contain',obj.Smsg)
    //     })
    // })

    it('verify fixture with normal object', () => {
        cy.log(info)
        //Step 1 Visit the apps
        cy.visit('https://codenboxautomationlab.com/contact/')

        //Step 2 Find NameField css selector nd perform type action
        cy.get('#nf-field-1').type(info.name)

        //Step 3 Find emailField css selector nd perform type action
        cy.get('#nf-field-2').type(info.Email)

        //Step 4 Find msglField css selector nd perform type action
        cy.get('[id="nf-field-3"]').type(info.msg)

        //Step 5 click on Submit button
        cy.get('#nf-field-4').click()
        cy.wait(17000)//17 sec
        //Step 6 Validate the sucess msg
        //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
        cy.get('.nf-response-msg>p').should('contain',info.Smsg)
    })
    it('Test1',()=>{
        cy.log(info)
    })
    it('Test 2',()=>{
        cy.log(info)
    })
})
