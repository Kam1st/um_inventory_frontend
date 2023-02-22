describe('delete_employee', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/employees')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.contains('Details').click()
    cy.url().should('eq', 'http://localhost:8081/employees/employeeDetails')
    cy.wait(3000)
    cy.contains('Delete').click()
    cy.url().should('eq', 'http://localhost:8081/employees')
    cy.get('tr').should('have.length', 10)
  })
})