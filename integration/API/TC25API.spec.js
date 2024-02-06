///<reference types="cypress"/>

describe('Verify the API', () => {
    it('validate the GET API', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res['body']['data'].length).to.eq(res['body']['data'].length)
            expect(res['body']['per_page']).to.eq(res['body']['data'].length)
            expect(res['body']['per_page']).to.eq(res.body.data.length)
        })
    })


    it('Validate the properties for multiple users', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            res.body.data.forEach(el => {
                expect(el).to.have.haveOwnProperty('id')
                expect(el).to.have.haveOwnProperty('email')
                expect(el).to.have.haveOwnProperty('first_name')
                expect(el).to.have.haveOwnProperty('last_name')
                expect(el).to.have.haveOwnProperty('avatar')
                expect(el).to.have.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
            })
        })
    })

    it('Validate the GET API for single user', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            cy.log(res)
            expect(res.body.data[0].email).to.eq('michael.lawson@reqres.in')

        })
    })

    it.only('Validate the POST API', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body:{
                "name": "AMOL",
                "job": "leader"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.body).to.have.all.keys('id','job','createdAt','name')
            expect(res.body.id).not.to.be.null
            expect(res.body.job).not.to.be.null
            expect(res.body.createdAt).not.to.be.null
            expect(res.body.name).not.to.be.null 

        })
    })
})