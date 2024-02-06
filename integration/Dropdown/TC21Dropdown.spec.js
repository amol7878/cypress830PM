//Twp types Dropdown
//1) Static Dropdown ===> fix options
//2) Dynamic Dropdown ===> Auto suggestions

describe("Verify the Dropdown in cypress",()=>{
    let text=
    it("Verify the Static dropdown",()=>{
        cy.visit("https://codenboxautomationlab.com/practice/")
        //cy.get("#dropdown-class-example").select("option1")
        //cy.get("#dropdown-class-example").select("Selenium")
        //cy.get("#dropdown-class-example").select("option3")
        cy.get("#dropdown-class-example").select("API")
    })
    it("Verify the Static dropdown",()=>{
        cy.visit("https://letcode.in/dropdowns")
        //cy.get("#fruits").select('1')
        cy.get("#fruits").select('3')
       
    })
    it("Verify the Dynamic dropdown",()=>{
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("#autocomplete").type('ind')
        //cy.get("#autocomplete").type('can')
        // cy.get(".ui-menu-item>div").each((el)=>{
        //     text=el.text()
        //     cy.log(text)
        //     if(text=="indonesia"){
        //         cy.get(el).click()
        //     }
        // })
        //cy.get(".ui-menu-item > div").contains('Canada').click()
        cy.get(".ui-menu-item > div").eq(1).click()
       
    })
    it.only("Verify the Dynamic dropdown",()=>{
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.StaticDrop('ind','India')
        //cy.get("#autocomplete").type('can')
        // cy.get(".ui-menu-item>div").each((el)=>{
        //     text=el.text()
        //     cy.log(text)
        //     if(text=="indonesia"){
        //         cy.get(el).click()
        //     }
        // })
        //cy.get(".ui-menu-item > div").contains('Canada').click()
       // cy.get(".ui-menu-item > div").eq(1).click()
       
    })
})