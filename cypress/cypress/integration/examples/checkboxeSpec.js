/// <reference types="Cypress" />

describe("Order an Item", ()=>{
    
    /* 
     * Test case to search for an article 
     * and add to cart.
     * 
     */
   it("Search for article and add to cart",()=>{

       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //  check and uncheck a single checkbox
       cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1');
       cy.get('input#checkBoxOption1').uncheck().should('not.be.checked');
    
    // check multiple checkboxes at a time.
       cy.get('input[type="checkbox"]').check(['option2','option3'])


    //static dropdown
    cy.get('select').select('option3').should('have.value','option3');


    //dynamic dropdown
    cy.get("#autocomplete").type("ind");
    
    cy.get('ul li.ui-menu-item').each(($el, index, lis)=>{
        let country = $el.find('.ui-menu-item-wrapper').text()
        cy.log(country);
        if(country === 'India'){
            cy.wrap($el).click();
        }
    });
    cy.get('#autocomplete').should('have.value','India');
    cy.get("#displayed-text").should('be.visible');
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should('not.be.visible');


   




   })


})