describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.wait(3000)
    cy.get('#client-id').type('2').should("have.value","2")
    cy.contains('Get Data By Client Id').click()


  })
})