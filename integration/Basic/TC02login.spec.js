

////AAA===>Action Arrange Assertion
describe('verify the login functionality',()=>{
    it.only('verify the login functionality with valid credentials',()=>{
        //step1==>visit thr url
        cy.visit('https://www.saucedemo.com/')
       //step2===>enter the user name
        cy.get('#user-name').type('standard_user')
        //step3===>enter the password
        cy.get('#password').type('secret_sauce')
        //step4==>click on login button
        cy.get('#login-button').click()
       //step5==>verify the successfull login
         //Assertion
         //implicity assertion==>should
         //Explicity Assertion===>Expect
         cy.url().should('contains','inventary')
         //https://www.saucedemo.com/inventory.html
         cy.get('.app_logo').should('be.visible')
         cy.get('.title').should('have.text','product')
    })
    it('Verify the functionality with Invalid credential',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard')
        cy.get('#password').type('secret')
        cy.get('.submit-button').click('#login-button')
        cy.url().should('contains',)
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
        
    })
}) 

//<input id="user-name"></input>
//Formula
//tagname[attr="value"]
//input[id="user-name"]

//by id
//use #
//#user-name

//by class
//use

//<span class="title">products</Span>