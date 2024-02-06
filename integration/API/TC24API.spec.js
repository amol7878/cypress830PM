///<reference types="cypress"/>
describe('API Testing', () => {
    let id
    it('GET API', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            expect(response.body).to.have.property("page")
            expect(response.body.page).to.eql(2)
        })
    })
    it('POST API', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "Amol",
                "job": "leader"
            }

        }).then((response) => {
            cy.log(response)
            id = response.body.id
            cy.log(id)
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq("Created")
            expect(response.body.name).to.eql("Amol")
            expect(response.body.job).to.eql("leader")

        })
    })
    it("PUT API",()=>{
      
      
        cy.request({
            method:"PUT",
            url:`https://reqres.in/api/users/${id}`,
            body:{
                "name": "AMOL",
                "job": "zion resident"
            }
        }).then((response)=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            expect(response.body.name).to.eq("AMOL")
            expect(response.body.job).to.eql("zion resident")

        })
    })
    it.only("DELETE API",()=>{
        cy.log(id)
        cy.request({
            method:"DELETE",
            url:`https://reqres.in/api/users/${id}`,
        }).then((response)=>{
            cy.log(response)
            // expect(response.status).to.eq(204)
            // expect(response.statusText).to.eq("No Content")
          })
    })
})