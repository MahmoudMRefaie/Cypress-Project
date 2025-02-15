import LandingPage from '../pom/LandingPage';
import ProductPage from '../pom/ProductPage';
import CheckoutPage from '../pom/CheckoutPage';
import ShippingPage from '../pom/ShippingPage';

describe('Register and Login Test', () => {

    beforeEach(() => {
        cy.visit('/client')
        cy.enter
    })
    
    it('Select Item from home' ,() => {

        const email = 'Mahmoud@Cypress.com'
        const password = 'MahmoudPass123'
        LandingPage.login(email, password)
    
        const item = 'ADIDAS ORIGINAL'
        ProductPage.selectItem(item)
    
        ProductPage.openCart()
        CheckoutPage.checkout()
    
        ShippingPage.enterShippingAdress('Egypt')
        ShippingPage.placeOrder()
    
        cy.get('.hero-primary').should('contain', 'Thankyou for the order.')
        cy.get('.hero-primary').should('be.visible')
    
        LandingPage.logout()
    })

})


