describe('get all employees', () => {
    it('passes', () => {
      cy.visit('http://localhost:8081/employees')
      cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
        cy.get('#username').type('employee1@uml.org')
        cy.get('#password').type('3x4mpl3!')
        cy.get('[name="action"]').click()
      })
      cy.url().should('eq', 'http://localhost:8081/employees')
      cy.wait(3000)
      cy.get('table').contains('th', 'Employee Id')
      cy.get('table').contains('th', 'Name')
      cy.get('table').contains('th', 'Position')
      cy.get('table').contains('th', 'Date Hired')
      cy.get('table').contains('th', 'Status')

  })
})