class ProductPage {
    openCart() {
        cy.get('[routerlink="/dashboard/cart"]').click()
    }
    
    selectItem(item) {
        cy.contains('.card-body', item).within(() => {
            cy.get('.fa-shopping-cart').click()
        })
    }

}

export default new ProductPage(); // Export an instance