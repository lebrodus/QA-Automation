/// <reference types="Cypress" />

describe("Order an Item", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("child url",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //resolve promise with then bc prop is a none cypress command
        // cy.get('#opentab').then((el)=>{
        //    const url =  el.prop('href');
        //    cy.visit(url);

        // })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
        cy.go('back');


        


    })

 
})