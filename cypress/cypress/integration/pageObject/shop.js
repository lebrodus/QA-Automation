
class Shop{

getAllProductItem(){
    return cy.get('app-card-list.row').find('.card');
}

getAllProductName(){
    return find('h4 a');
}

getAllAddbtns(){
    return contains('Add');
}
getCheckoutBtn(){
    return cy.get('.btn-primary');
 
}
getItemsInCart(){
    return cy.get("tr td:nth-child(4) strong");
}

getCheckOutBtnSuccess(){
    return cy.get('.btn-success');
}
getCountryField(){
    return cy.get('#country');
}
getCountryName(){
    return cy.get('.suggestions > ul > a');
}
getCheckbox(){
    return cy.get('input#checkbox2');
}
getPurchaseBtn(){
    return cy.get('.ng-untouched > .btn');
}
getAlert(){
    return cy.get('.alert');
}
getTotalValue(){
    return cy.get('h3 strong');
}

}



export default Shop;