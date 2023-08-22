import { Given, When,Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../../pageObject/homePage";
import Shop from "../../../pageObject/shop";


const home = new homePage();
const shop = new Shop();
let info;

before(function()
{
   // runs ones before all test in this block
   cy.fixture('example').then(function(data)
   {
       info = data;

   })

})

Given('I open the Ecommerce page',function(){
    cy.visit(Cypress.env('url')+'/angularpractice/');

})
When('I add items to cart',()=>{
    home.getShopBtn().click();
    info.productName.forEach(element => {
        cy.addProduct2Cart(element);
    
    });

})
Then('validate the total amount',()=>{
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
    

})

Then('select country submit and verify success message',()=>{
    shop.getCheckOutBtnSuccess().click();
         shop.getCountryField().type('India');
         shop.getCheckbox().click({force:true});
         shop.getPurchaseBtn().click();
         shop.getAlert().then((element)=>{
            const el = element.text();
            expect(el.includes('Success')).to.be.true
        });
})