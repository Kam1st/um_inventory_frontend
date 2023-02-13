describe('add order', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.wait(1000)
    cy.contains('New Order').click()
    cy.wait(1000)
    cy.get('#client-id').type('8').should("have.value","8")

    cy.get('#item').select(0).should('have.value', '2454544')

    cy.get('#plus').click()

    cy.contains('Add Item To Order').click()

    cy.get('#addOrder').click()

    cy.wait(500)


    cy.url().should('eq', 'http://localhost:8081/orders')

  })
})