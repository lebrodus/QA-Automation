/// <reference types="Cypress" />

import homePage from "../pageObject/homePage"
import Shop from "../pageObject/shop"

describe("working with framework", ()=>{
    let info
    const home = new homePage()
    const shop = new Shop()
     before(function()
     {
        // runs ones before all test in this block
        cy.fixture('example').then(function(data)
        {
            info = data;

        })

     })

    it("Login from the homescreen",()=>{
        
        cy.visit(Cypress.env('url')+'/angularpractice/');
        home.getEditBox().type(info.name);
        home.getSelectGenderBtn().select(info.gender);
        home.getTwoDataField().should('have.value',info.name);
        home.getEditBox().should('have.attr','minlength',2);
        home.getEntrepreneurRadioBtn().should("be.disabled");

    })

    it("Add a product to cart and  checkout",()=>{
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        // cy.get('li a[href="/angularpractice/shop"]').as('shop');
        home.getShopBtn().click();
        home.getShopBtn().url().should('include','angularpractice/shop');
        

        //click on multiple items
        // 
        info.productName.forEach(element => {
            cy.addProduct2Cart(element);
        
        });

        shop.getCheckoutBtn().click();
    // shop.getItemsInCart().eq(2).then((mn)=>{
    //         let string = mn.text();
    //         let substr = string.substring(string.indexOf('₹')+3)
    //         cy.log(Number(substr));


    //    })
         let sum = 0;
         shop.getItemsInCart().each(($el, index, $lis)=>{
            const txt = $el.text();
            let res = txt.split(" ");
            res = res[1].trim();
            let intNum = Number(res);
            sum = intNum + sum


            

         }).then(()=>{
            shop.getTotalValue().then((el)=>{

                const toValText = el.text()
                    let toValnum = Number(toValText.substring(toValText.indexOf('₹')+3).trim());
                    expect(sum).to.equal(toValnum);
             })


         })
         


         shop.getCheckOutBtnSuccess().click();
         shop.getCountryField().type('India');
         shop.getCheckbox().click({force:true});
         shop.getPurchaseBtn().click();
        //  shop.getAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks');
        //  Cypress.config('defaultCommandTimeout',8000);
        //  shop.getCountryName().click();
        shop.getAlert().then((element)=>{
            const el = element.text();
            expect(el.includes('Success')).to.be.true
        });
         
       



})




})
