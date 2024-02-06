

export class Dashboard {
    elements = {
        MainMenu: 'ul[class="oxd-main-menu"]',
        QuikLaunchTab: '.orangehrm-quick-launch',
        DashBoardLogo: '[alt="client brand banner"]'
    }

    VerifyMainMenuTab() {
        cy.get(this.elements.MainMenu).children().should('have.length', 12)
    }

    VerifyQuikLaunchTab(){
        cy.get(this.elements.QuikLaunchTab).children().should('have.length',6)
    }

    VerifyDashBoardLogo(){
        cy.get(this.elements.DashBoardLogo).should('be.visible')
    }
}