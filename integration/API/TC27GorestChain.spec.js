describe('Validate Basic Auth API', () => {
    it('Verify the Gorest API', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Amol Shinde",
                "gender": "male",
                "email": `Minskol12${Math.random() * 7}@gmail.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            return res.body.id
        }).then((id) => {
            //cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "Amol Vilas Shinde",
                    "email": `amolshinde${Math.random() * 7}@gmail.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
                }
            }).then((res) => {
                return res.body.id
            }).then((id) => {
                cy.log(id)
                cy.request({
                    methd:"DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
                    }
                }).then((res) => {
                    cy.log(res)
                    expect(res.status).to.eq(204)

                })
            })
        })
    })
})