/* eslint-disable */
describe('get_stock_items_by_price', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.get('#stockPrice').type('25.99')
    cy.wait(3000)
    cy.contains('Get Data').click()
  })
})