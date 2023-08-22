/// <reference types="Cypress" />

describe("Web tables", ()=>{
    
     /* 
      * Test case to search for an article 
      * and add to cart.
      * 
      */
    it("verify price in web tables",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('.left-align #product tr td:nth-child(2)').each(($el, index, lis)=>{
        //     const text = $el.text();
        //     if(text.includes('WebSecurity')){
        //         cy.get('.left-align #product tr td:nth-child(2)').eq(index).next().then(function(price)
        //         {
        //             const priceText = price.text()
        //             expect(priceText).to.equal('20')
        //         })
        //     }

        // })
        cy.get(".left-align #product tr td:nth-child(2)").each(($el, index, lis)=> {
            const text = $el.text()
            if(text.includes("JMETER")){
                cy.get(".left-align #product tr td:nth-child(2)").eq(index).next().then(function(amt){
                    const amount = amt.text()
                    expect(amount).to.equal('25');
                })

            }
        })

        //MouseOver
        


    })

 
})