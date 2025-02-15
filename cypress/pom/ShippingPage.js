class ShippingPage {
    
    enterShippingAdress(address) {
        cy.get('.user__address input').type(address)
        cy.contains('section span', address).click()
    }
    
    placeOrder() {
        cy.get('.action__submit i').click({force: true})
    }
    
}

export default new ShippingPage(); // Export an instance