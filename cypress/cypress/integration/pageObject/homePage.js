class homePage{

// get the name in the home page 
getEditBox(){
    return cy.get("input[name='name']:nth-child(2)");
}

getSelectGenderBtn(){
    return cy.get('#exampleFormControlSelect1');
}

getEntrepreneurRadioBtn(){
    return cy.get("input#inlineRadio3");
}

getShopBtn(){
    return cy.get('li a[href="/angularpractice/shop"]');
}

getTwoDataField(){
    return cy.get(':nth-child(4) > .ng-pristine');
}


}
export default homePage;