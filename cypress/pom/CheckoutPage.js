class CheckoutPage {
    
    checkout() {
        cy.contains('.btn-primary', 'Checkout').click()
    }
 
}

export default new CheckoutPage(); // Export an instance