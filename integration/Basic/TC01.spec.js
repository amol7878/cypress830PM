

////AAA===>Action Arrange Assertion
describe('To validate the Flipkart search functionality',()=>{
    it.only('verify the Flipkart search functionality',()=>{
        //step1==>visit thr aaplication
        cy.visit('https://www.flipkart.com/')
       //step2===>type in search box
        cy.get('[title="Search for Products, Brands and More"]').type('Iphone14')
        //step3===>click on search button or press enter
        cy.get('button[type="submit"]').click({force:true})
        
    })
})

//HTML element 
//<tagname>Text</tagname>
//<span>Become a seller </sapn>
//tagname[Attr=value]
//input[title="search for products,brands and more"]