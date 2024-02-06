describe('Validate the Iframe in cypress', () => {
    it('Validate the Iframe using Jquery mrthod', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            let body = ele.contents().find('body')
            cy.wrap(body).as('IframeBody')
            cy.get('@IframeBody').find('a[href="products.html"]').should('be.visible')
            cy.get('@IframeBody').find('a[href="products.html"]').should('have.text','Our Products')
        })
    })
    it.only('Validate Iframe using javascript method',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele)=>{
            cy.log(ele)
            let body2=ele[0].contentDocument.body
            cy.log(body2)
            cy.wrap(body2).as('Iframe')
            cy.get('@Iframe').find('a[href="products.html"]').should('be.visible')
            cy.get('@Iframe').find('a[href="products.html"]').should('have.text','Our Products')
            cy.get('@Iframe').find('[href="index.html"]').should('be.visible')

        })
    })
})