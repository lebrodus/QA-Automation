/// <reference types="Cypress" />

describe("Mouse Over", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("Verify the mouseover is working",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //MouseOver 
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        //grab the url an check whether it contains top.
        cy.url().should('include','top');
        


    })

 
})