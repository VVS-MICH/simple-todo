class mainP {

    todoField(){
       return cy.get('input')
    }  
    addIcon(){
       return cy.get('button')
    }
    backG(){
       return cy.get('.App-header')
    }
    lists(){
       return cy.get('ol')
    }
    onlyCheck(){
       return cy.get('.App-tick') 
    }
     
}
export default new mainP