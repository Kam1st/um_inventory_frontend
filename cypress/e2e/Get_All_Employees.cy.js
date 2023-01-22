describe('get all employees', () => {
    it('passes', () => {
      cy.visit('http://localhost:8081/employees')
      cy.url().should('eq', 'http://localhost:8081/employees')
      cy.wait(3000)
      cy.get('table').contains('th', 'Employee Id')
      cy.get('table').contains('th', 'Name')
      cy.get('table').contains('th', 'Position')
      cy.get('table').contains('th', 'Date Hired')
      cy.get('table').contains('th', 'Status')

  })
})