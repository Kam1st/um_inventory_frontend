/* eslint-disable */
describe('get_client_by_id)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/clients')
    cy.wait(3000)
    cy.get('#clientId').type('123456789')
    cy.wait(3000)
    cy.contains('Get Client').click()
    // cy.get('#clientId').expect('alert')
  })
})