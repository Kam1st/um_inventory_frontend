describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.contains('Details').click()
    cy.get('#quantSold').should('have.value','3864')
  })
})