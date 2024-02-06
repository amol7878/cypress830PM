describe('Verify the date piker functionality', () => {
    it('Verify the calender through cypress', () => {
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let da = date.getDate()//current date
        let month = date.getMonth()//Return current month index
        //jan=0,feb=1,mar=2
        let fullmonth = date.toLocaleString('defaut', { month: "long" })
        let fullmonth2 = date.toLocaleString('default', { month: "short" })
        let year = date.getFullYear()

        cy.log(da)
        cy.log(month)
        cy.log(fullmonth)
        cy.log(fullmonth2)
        cy.log(year)
        cy.visit('https://www.redbus.com')
        cy.get('#date-box').click()
        function selectMonthYear() {
            cy.get('.ccLrBz ').eq(0).then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(year)) {
                    cy.get('[clip-rule="evenodd"]').click()
                    selectMonthYear()
                }
            })
            cy.get('.monthTitle').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(fullmonth)) {
                    cy.get('[clip-rule="evenodd"]').click()
                    selectMonthYear()
                }
            })
        }
        selectMonthYear()

        function selectdate(){
            cy.get('.leGhkM').contains(da).click()
        }
        selectdate()
    })
})