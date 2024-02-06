describe('Verify the fixture',()=>{
    let aa = [
        {
            name:"Mahesh Ahere",
            Email:"ABC@gmail.com",
            msg:"I am New In Cypress",
            Smsg:"Form submitted successfully."
        },

        {
            name:"Mahesh Ahere",
            Email:"ABC@gmail.com",
            msg:"I am New In Cypress",
            Smsg:"Form submitted successfully."
        }
    ]

    //2 ways
    //1)Dot notation
    aa[0].name="Ganesh"
    console.log(aa.name)
    console.log(aa.Email)
    //2)Bracket notation
    console.log(aa["Email"])

    it.only('Verify the fixtur with normal object',()=>{
        
        //Step 1 Visit the apps
        cy.log(aa[0].Email)
        cy.visit('https://codenboxautomationlab.com/contact/')
   
        //Step 2 Find NameField css selector nd perform type action
        cy.get('#nf-field-1').type(aa[0].name)
   
        //Step 3 Find emailField css selector nd perform type action
        cy.get('#nf-field-2').type(aa[0]. Email)
   
        //Step 4 Find msglField css selector nd perform type action
        cy.get('[id="nf-field-3"]').type(aa[0].msg)
   
        //Step 5 click on Submit button
        cy.get('#nf-field-4').click()
        cy.wait(17000)//17 sec
   
        //Step 6 Validate the sucess msg
        //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
        cy.get('.nf-response-msg>p').should('contain',aa[0].Smsg)
       })

       it('Test with multiple data',()=>{
        aa.forEach((el)=>{

        //Step 1 Visit the apps
        cy.visit('https://codenboxautomationlab.com/contact/')
   
        //Step 2 Find NameField css selector nd perform type action
        cy.get('#nf-field-1').type(el.name)
   
        //Step 3 Find emailField css selector nd perform type action
        cy.get('#nf-field-2').type(el.Email)
   
        //Step 4 Find msglField css selector nd perform type action
        cy.get('[id="nf-field-3"]').type(el.msg)
   
        //Step 5 click on Submit button
        cy.get('#nf-field-4').click()
        cy.wait(17000)//17 sec
   
        //Step 6 Validate the sucess msg
        //cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
        cy.get('.nf-response-msg>p').should('contain',el.Smsg)
        })
        })
        
    })