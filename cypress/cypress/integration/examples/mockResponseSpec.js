// <reference types="Cypress" />

import Room from "../pageObject/room"


describe("Mocking response", ()=>{
    const room = new Room()
    
   it("First testcase",()=>{
    cy.visit(Cypress.env('urlbook'));
    cy.intercept({
        method: 'GET',
        url:'https://automationintesting.online/report/room/1'  
    },{
        statusCode : 200,
        body :{"report":[{"start":"2022-02-01","end":"2022-02-05","title":"Unavailable"}]}
    }).as('retrieveRoom')
    room.getBookRoomBtn().click();
    cy.wait('@retrieveRoom').its('response.body').then((RespObj)=>{
        
            const size = Object.keys(RespObj).length
            cy.log(size);
    



    });





   })


})