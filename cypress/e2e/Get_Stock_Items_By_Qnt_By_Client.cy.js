describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.contains('Produce List').click()
    cy.wait(3000)
    cy.url().should('eq', 'http://localhost:8081/stock/lists')
    cy.get('#clientId').type('5').should('have.value', '5')
    cy.wait(3000)
    cy.contains('Get Data').click()
    cy.get('tr').should('have.length', 8)
  })
})