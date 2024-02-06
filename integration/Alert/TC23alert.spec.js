

describe('Verify js alert with cypress', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Verify JS basic alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (text) => {
            //cy.log(text)
            expect(text).to.eql('I am a JS Alert')
        })
    })
    it('Verify JS basic alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'alert').as('element')
        })
        //cy.contains(/JS Alert/i).click()
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('@element').should('have.been.calledOnceWith', 'I am a JS Alert')
    })
    it('Verify JS confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eql('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it('Verify JS confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (text) => {
            //cy.log(text)
            expect(text).to.eql('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    it('Verify JS confirm alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'confirm').as('element')
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('@element').should('have.been.calledOnceWith', 'I am a JS Confirm')
    })
    it('Verify prompt alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns('Mahesh Ahere')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'Mahesh Ahere')
    })
    it('Verify prompt alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns("")
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered:')
    })
    it.only('Verify prompt alert with window', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').callsFake(() => null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered:')
        cy.get('#result').should('be.visible')
    })
})