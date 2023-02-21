/* eslint-disable */
describe('get_client_by_id)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/clients')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.get('#clientId').type('123456789')
    cy.wait(3000)
    cy.contains('Get Client').click()
    // cy.get('#clientId').expect('alert')
  })
})