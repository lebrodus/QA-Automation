/// <reference types="Cypress" />

describe("Order an Item", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("Search for article and add to cart",()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("ca");
       //cy.get('.products').find('.product').find('h4.product-name').text();
        cy.get('.products').find('.product').each(($el, index, $lis)=>{

        let productName = $el.find('h4.product-name').text();
        if(productName.includes('Carrot')){
        cy.wrap($el).contains('ADD TO CART').click()
                                                             
    }
    
            
        });




    })

     /* 
      * Test case to proceed to checkout 
      * and place order.
      * 
      */
    it("Proceed to checkout and place order",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("ca");
        //cy.get('.products').find('.product').find('h4.product-name').text();
        cy.get('.products').find('.product').each(($el, index, $lis)=>{

            let productName = $el.find('h4.product-name').text();
            if(productName.includes('Carrot')){
                cy.wrap($el).contains('ADD TO CART').click();
            }
    
            
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();



    })

})