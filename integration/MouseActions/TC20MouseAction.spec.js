describe("Verify the mouse Action",()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/actions")
    })
    it("Verify the dubleclick",()=>{
        cy.get(".action-div").dblclick()
        cy.get(".action-input-hidden ").should("be.visible")
    })
    it("Verify the rightlick",()=>{
        cy.get(".rightclick-action-div").rightclick()
        cy.get(".rightclick-action-div").should("have.class","hidden")
        cy.get(".rightclick-action-input-hidden").should("be.visible")
    })
    it.only("Verify the ScrollTo",()=>{
        //cy.scrollTo("bottom")
        cy.get('#scrollable-horizontal').scrollTo('center')
    })
})