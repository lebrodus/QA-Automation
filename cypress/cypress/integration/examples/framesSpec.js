/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe("Order an Item", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("Testing frames",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded("#courses-iframe");

        // switch to iframe mode
        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        // cy.iframe().url().should('include','rahulshettyacademy');
        cy.iframe().find('div .pricing-container').should('have.length',2)


        


    })

 
})