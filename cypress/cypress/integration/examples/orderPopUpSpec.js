/// <reference types="Cypress" />

describe("Order an Item", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("Search for article and add to cart",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        
        //check the string in alert
        cy.on('window:alert', (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
           
        });
        // check the string in the confirm
        cy.on('window:confirm',(str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
        });


        //working with a child tab 

        // first remove the target attribute then open the link
        // cy.get('#opentab').invoke('removeAttr','target').click();
        cy.get('#opentab').invoke('removeAttr','target').click();

        // assert whether the url opens
        cy.url().should('include','rahulshettyacademy');
        cy.go('back');  // browser navigation back
        //cy.go('forward');


    })

 
})