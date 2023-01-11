describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.wait(3000)
    cy.get('#stock-id').type('7486504').should("have.value","7486504")
    cy.contains('Get Data By Stock Item Id').click()


  })
})