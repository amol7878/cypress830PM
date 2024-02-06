//MouseActions
//click
//RigthClick
//DoubleClick
//MouseOver
//MouseMove
//MouseUp
//MouseDown
//Scrool

//1=LeftButton
//2=ScroollButton
//3=RightButton



describe('Verify the mouse actions',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    // })
    it('Verify the scroll Action',()=>{
        cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    })
    it('Removing _black value',()=>{
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    })
    it('Verify the mousedown,mouseup,mouseMove',()=>{
        cy.get('#draggable1').trigger('mousedown',{which:1})
        cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable1>p').should('have.text','Dropped!')
    })
    it('verify the mousedown,mouseup,mouseMove',()=>{
        cy.get('#draggable2').trigger('mousedown',{which:1})
        cy.get('#droppable2').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable2 p').should('have.text','Dropped!')
    })
    it.only('Veify the mouseover functionality',()=>{
        cy.visit('https://wwww.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        // cy.contains('Create a List').click()
        // cy.url().should('include','wishlist/intro')
        // cy.url().should('contain','https://www.amazon.com/hz/wishlist/intro')
        cy.contains('Find a List or Registry').click()
        cy.url().should('include','nav_ListFlyout_find')
        cy.url().should('contain','https://www.amazon.com/registries?ref_=nav_ListFlyout_find')
    })
})