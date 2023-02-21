describe('add order', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.wait(1000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.contains('New Order').click()
    cy.wait(1000)
    cy.get('#client-id').type('8').should("have.value","8")

    cy.get('#item').select(0).should('have.value', '2454544')

    cy.get('#plus').click()

    cy.contains('Add Item to Order').click()

    cy.get('#addOrder').click()

    cy.wait(500)


    cy.url().should('eq', 'http://localhost:8081/orders')

  })
})