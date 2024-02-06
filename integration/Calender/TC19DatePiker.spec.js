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
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').click()
        function selectMonthYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(fullmonth)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
        }
        selectMonthYear()

        function selectdate(){
            cy.get('.ui-state-default').contains(da).click()
        }
        selectdate()
    })
})