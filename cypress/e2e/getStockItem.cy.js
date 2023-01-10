describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/stock')
    cy.wait(3000)
    cy.contains('Details').click()
    // cy.get('[data-testid="id"]').assert.equal('2454544', '2454544', 'ids match')
  })
})