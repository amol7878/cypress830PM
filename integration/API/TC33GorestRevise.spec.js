describe('Validate the Gorest APIs', () => {
    it('Validate GET APIs Using cy.request', () => {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users/1270200",
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(1000)
            //expect(res.body.length).to.eq(10)
        })
    })
    //1270823
    it.only('Validate POST APIs Using cy.request', () => {
        let email = `tenali.ramakrishna@${Math.floor(Math.random() * 9)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Amol v Shinde",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.be.lessThan(1000)

        })
    })
    it.only('Validate PUT APIs Using cy.request', () => {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Rudra Shinde",
                "email": `rudra.shinde@1${math.floor(Math.random()*7)}ceil.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(1000)

        })
    })

    it.only('Validate DELETE APIs Using cy.request', () => {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/1270823",
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(204)
            expect(res.duration).to.be.lessThan(1000)

        })
    })
})