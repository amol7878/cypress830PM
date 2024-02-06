describe('Validate the API request', () => {

    it('Validate GET request response', () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then((response) => {
            //cy.log(response)
            let text = response.body.body
            //cy.log(text)
            return text
        }).then((text) => {
            //cy.log(text)
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('[class="network-btn btn btn-primary"]').click()
            cy.get('[class="network-comment"]').should('have.text', text)
        })
    })


    it('verify POST rquest responce', () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.body.email).to.eq('hello@cypress.io')
        })
    })

    it.only('verify PUT request response',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }

        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.email).to.eq('hello@cypress.io')
            expect(res.body.name).to.eq("Using PUT in cy.intercept()")
        })

    })
})