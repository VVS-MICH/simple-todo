/// <reference types = "cypress" />
import mainP from './Page-Objects/mainPage' 
 

  

describe ('toDoTests', () => {

    // user should be able to successfully create Todo list with content
    it('create a todo item named Do the dishes',  () => {
    cy.visitSite()
    cy.wait(10000)
    mainP.todoField().type("Do the dishes")
    mainP.addIcon().click()
    //verifying that it has been created
    mainP.lists().contains("Do the dishes")
  }) 


    // user should not be able to create an empty Todo list
    it('create a todo without inputing any text (should not be possible)',  () => {
      cy.visitSite()
      cy.wait(10000)
      mainP.addIcon().click()  //clicking the add button without typing
      //verifying that no todo item is visible on the list
      mainP.lists().should("not.be.visible")
  }) 


    it('create a todo item using spaces only (should not be possible)',  () => {
      cy.visitSite()
      cy.wait(10000)
      mainP.todoField().type("     ") 
      mainP.addIcon().click()  //clicking the add button after typing just spaces
       //verifying that no todo item is visible on the list
      mainP.lists().should("not.be.visible")


  }) 

    // user should be able to strike off/delete to do 
    it('create a todo item then delete item',  () => {
      cy.visitSite()
      cy.wait(10000)
      mainP.todoField().type("123456ABCDEF")
      mainP.addIcon().click()
      //verifying that it has been created
      mainP.lists().contains("123456ABCDEF")
      //checking off the item
      mainP.onlyCheck().click()
      //verifying that no todo item is visible on the list
      mainP.lists().should("not.be.visible")
  }) 

}) 

