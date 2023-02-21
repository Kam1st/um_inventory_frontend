/* eslint-disable */
describe('get_stock_item_by_id', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.contains('Details').click()
    cy.get('#quantSold').should('have.value','3864')
  })
})