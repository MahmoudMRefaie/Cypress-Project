import LandingPage from '../../pom/LandingPage';

const email = `Mahmoud_${Date.now()}@Cypress.com`
const password = 'MahmoudPass123'

describe('Register and Login Test', () => {
    beforeEach(() => {
        cy.visit('/client')
    })
    
    it('Register for user' ,() => {
    
        cy.contains('.text-reset', 'Register here').click()
    
        
        LandingPage.register('Mahmoud', 'Cypress', email, '1114111111', 'Engineer', 'Male', password)
        cy.get('.toast-title').should('contain', 'Registered Successfully')
       
        cy.get('[routerlink="/auth"]').click()
    })
    
    it('Login to user then logout' ,() => {
        
        LandingPage.login(email, password)
    
        LandingPage.logout()
    })
    
})

