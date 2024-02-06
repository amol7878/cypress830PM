describe('Validate Basic AUTH Apis', () => {
    it.only('Validate GET User API', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.body.length).to.eq(10)
            expect(res.duration).to.be.lessThan(1000)
        })
    })
    it("Validate Basic auth Post Api", () => {
        let email = `tenali.ramakrishna@55${Math.floor(Math.random()*10)}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers:{
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res)=>{
            cy.log(email)
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })
    it('Validate basic auth PUT API',()=>{
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/1270192",
            body:{
                "name":"Allasani Peddana",
                "email":"allasani.peddana@55ce.com",
                 "status":"active"
            },
            headers:{
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.duration).to.be.lessThan(1000)
        })
    })
    it('Validate DELETE basic Auth API',()=>{
        cy.request({
            methd:"DELETE",
            url:"https://gorest.co.in/public/v2/users/1270192",
            headers:{
                Authorization: "Bearer 63be8d8f620ec6a90fa7934d06d4e258d0b9cec926efcfe6afa5f4d3bbf814fe"
            }
        }).then((res)=>{
            cy.log(res)
            //expect(res.status).to.eql(204)
            //expect(res.duration).to.be.lessThan(500)
        })
    })

})