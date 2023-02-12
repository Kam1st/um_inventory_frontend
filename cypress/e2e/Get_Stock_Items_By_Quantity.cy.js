describe('get_stock_items_by_quantity', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock/lists')
    cy.wait(3000)
    cy.contains('Get Stock Items By Quantity Sold').click()
    cy.wait(3000)
    cy.get('table tbody tr:first-child td#quantity').then(($firstRowQty) => {
      const firstRowQty = parseInt($firstRowQty.text(), 10)
      expect(firstRowQty).to.equal(87)
    })
  })
})