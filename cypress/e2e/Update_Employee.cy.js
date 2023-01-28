describe('update_employee', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/employees')
    cy.wait(3000)
    cy.contains('Details').click()
    cy.url().should('eq', 'http://localhost:8081/employees/employeeDetails')
    cy.get('#position').type(' of Marketing').should('have.value', 'CEO of Marketing')
    cy.wait(3000)
    cy.contains('Update Employee').click()
    cy.url().should('eq', 'http://localhost:8081/employees')
  })
})