describe("Verify FileUplode in cypress",()=>{
    it("verify FileUplode",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Capture.png')
        cy.get('#file-submit').click()
        cy.get("div>h3").should("have.text",'File Uploaded!')
        cy.get("#uploaded-files").contains('Capture')
        cy.get("#uploaded-files").should('contain','Capture')

    })
    it("verify multiple FileUplode",()=>{
        let files=['Capture.png','Minskole.png','Capture.png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(files)
        cy.get("#fileList").children().should('have.length',3)

    })
    it("verify Upload fileName Change",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Capture.png',fileName:'Mahesh.png'})
        cy.get('#file-submit').click()
        cy.get("div>h3").should("have.text",'File Uploaded!')
        cy.get("#uploaded-files").contains('Mahesh')
        cy.get("#uploaded-files").should('contain','Mahesh')

    })
    it.only("verify Upload fileName Change",()=>{
        cy.visit('http://117.247.89.131/QMS1/BookingMaster.aspx')
        cy.get('#ctl00_aspxPageContent_txtBookingDate').type('11052024')
        // cy.get('#file-upload').attachFile({filePath:'Capture.png',fileName:'Mahesh.png'})
        // cy.get('#file-submit').click()
        // cy.get("div>h3").should("have.text",'File Uploaded!')
        // cy.get("#uploaded-files").contains('Mahesh')
        // cy.get("#uploaded-files").should('contain','Mahesh')

    })
})