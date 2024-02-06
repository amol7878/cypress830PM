describe('Validate the Apis using intercept', () => {
    it('Validate Get Api', () => {
        cy.fixture('intercept').then((response) => {
            response.forEach(element => {
                cy.intercept({
                    method: "GET",
                    url: "https://jsonplaceholder.cypress.io/comments/1"
                },
                {
                        body: element,
                        statusCode: 201
                }).as('GetRequest')
                cy.visit('https://example.cypress.io/commands/network-requests')
                cy.get('[class="network-btn btn btn-primary"]').click()
                cy.wait('@GetRequest').then((res) => {
                    cy.log(res)
                    expect(res.response.statusCode).to.eq(201)
                    cy.get('.network-comment').should('be.visible')
                    cy.get('.network-comment').should('have.text', res.response.body.body)
                })
            });
        })

    })

    it.only('Validate POST Api', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        },
            {
                statusCode: 401,
            }).as('PostRes')
        cy.get('[class="network-post btn btn-success"]').click()
        cy.wait('@PostRes').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(401)
        })
        cy.get('.network-post-comment').should('not.be.visible')
        // cy.get('.network-post-comment').should('have.text','POST successfil!')
    })
})