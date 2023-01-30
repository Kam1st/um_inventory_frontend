/* eslint-disable */
describe('get_stock_items_by_supplier_name', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.get('#supplierName').type('Paul{enter}')
  })
})