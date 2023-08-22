// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import Shop from "../integration/pageObject/shop";



Cypress.Commands.add('addProduct2Cart', (productName) => { 
    const shop = new Shop();

    shop.getAllProductItem().each(($el, index, $list)=>{

        // extract text
        const Text_title = $el.find('h4 a').text();
        if(Text_title.includes(productName)){
    
            // select and click the add button
            cy.wrap($el).contains('Add').click();
    
            //you can use the index to locate the add button
            // cy.get('.btn.btn-info').eq(index).click()
            
        }
    })


 })


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })