describe('Verify the Api calls using cy.intercept', () => {
    it('Validate get comment in ui using intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetRequest')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetRequest')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est')

    })
    it('validate GET request using intercept', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("GetCmt")
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetCmt').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.request.headers.referer).to.eq("https://example.cypress.io/")
        })
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est')
    })
    it('validate GET request using intercept', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as("PostCmt")
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@PostCmt').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.body).to.have.all.keys("id",'email','name','body')
        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text', 'POST suceessful')
    })

    it.only('validate PUT request using intercept', () => {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("PUTRequest")
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-put').click()
        cy.wait('@PUTRequest').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body).to.have.all.keys("id",'email','name','body')
            expect(res.request.headers.host).to.eq("jsonplaceholder.cypress.io")
            expect(res.response.body.name).to.eq('Using PUT in cy.intercept()')
        })
    })
})