/* eslint-disable */
describe('get_stock_item_by_id', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.contains('Details').click()
    cy.get('#quantSold').should('have.value','3864')
  })
})