class LoginPage {
    // Define elements using getter methods
    login(email, password) {
        cy.get('#userEmail').type(email)
        cy.get('#userPassword').type(password)
        cy.get('[type=submit]').click()
    }
  
    register(firstName, lastName, email, phoneNumber, occupation, gender, password) {
        cy.get('[type=firstName]').type(firstName)
        cy.get('[type=lastName]').type(lastName)
        cy.get('#userEmail').type(email)
        cy.get('#userMobile').type(phoneNumber)
        cy.get('[formcontrolname=occupation]').select(occupation)
        cy.get(`[value=${gender}]`).click()
        cy.get('#userPassword').type(password)
        cy.get('#confirmPassword').type(password)
        cy.contains('I am 18 year or Older').siblings('div').check()
        cy.get('[type=submit]').click()  
    }
  
    logout() {
        cy.get('.fa-sign-out').click()
    }

  }
  
  export default new LoginPage(); // Export an instance