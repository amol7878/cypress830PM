import { Dashboard } from "../../support/OrangeHrm/Dashboard";
import { homepage } from "../../support/OrangeHrm/LoginPage";

describe("Verify The DashBoard Page",()=>{
    let dashoard=new Dashboard()
    let home= new homepage()
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        home.login('Admin',"admin123")
        cy.url().should('contain',"dashboard")
    })

    it("Verify The Main Menu Of DashBoard",()=>{
       dashoard.VerifyMainMenuTab()
    })

    it("Verify The Quick Launch Tab",()=>{
        dashoard.VerifyQuikLaunchTab()
     })

     it("Verify The DashBoard Logo",()=>{
        dashoard.VerifyDashBoardLogo()
     })
})