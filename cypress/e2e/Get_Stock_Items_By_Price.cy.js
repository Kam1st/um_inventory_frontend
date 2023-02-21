/* eslint-disable */
describe('get_stock_items_by_price', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.get('#stockPrice').type('25.99')
    cy.wait(3000)
    cy.contains('Get Data').click()
  })
})