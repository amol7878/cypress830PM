


describe('Verify the cypress hooks Method',()=>{

    //before    ==> runs at starts only
    //beforeEach==> runs before each it block
    //after     ==> runs at last
    //afterEach ==> runs after each it block
    before(function(){
        cy.log('i am from before block')
    })
     
    beforeEach(function(){
        cy.log('i am from beforeEach block')
    })

    after(function(){
        cy.log('i am from after block')
    })

    afterEach(function(){
        //logout
        cy.log('i am from afterEach block')
    })

    it('TestCase One',()=>{
        //Login with diffrent user
        cy.log('I am from First TeatCase') 
    })

    it('TestCase Two',()=>{
        //Login with diffrent user
        cy.log('I am from Second TeatCase') 
    })




})
