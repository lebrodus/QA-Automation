/// <reference types="Cypress" />

//you can write your cypress code
describe('testsuite',function(){
    
    it('testcase', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').then((ParentProduct) => {
            cy.wrap(ParentProduct).should('have.length',4);

        })
        cy.get('.products').as('products');
        // cy.get('.products').find('.product').should('have.length',4);
        // Scy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();


        //aliase act as variable
        cy.get('.products').as('products');

        cy.get('@products').find('.product').each(($el, index, $lis)=>{
            
            //extract the text in the first product
           const textVeg = $el.find('h4.product-name').text();
           if(textVeg.includes('Carrot')){
            //cy.wrap($el).contains('ADD TO CART').click();
                  //or
            cy.wrap($el).find('button').click();

           }
           else if (textVeg.includes('Cap')){
            cy.wrap($el).contains('ADD TO CART').click();

           }

        })

        //click the cart
        cy.get('header .container').find('.cart').find('a.cart-icon').then((cart) => {
            
            cy.wrap(cart).click();
        });

        // how define and use variables properly
        // cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then((logo)=>{
            cy.wrap(logo).should('have.text','GREENKART');
        }); 

    })

})