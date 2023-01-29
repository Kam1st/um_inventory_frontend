describe('delete_employee', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/employees')
    cy.wait(3000)
    cy.contains('Details').click()
    cy.url().should('eq', 'http://localhost:8081/employees/employeeDetails')
    cy.wait(3000)
    cy.contains('Delete').click()
    cy.url().should('eq', 'http://localhost:8081/employees')
    cy.get('tr').should('have.length', 10)
  })
})