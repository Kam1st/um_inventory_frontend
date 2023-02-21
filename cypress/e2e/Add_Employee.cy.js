describe('add employee', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/employees')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.contains('Add Employee').click()
    cy.url().should('eq', 'http://localhost:8081/employees/new')
    cy.wait(2000)
    cy.get('#name').type('Kam').should("have.value","Kam")
    cy.get('#position').type('Manager').should("have.value","Manager")
    cy.get('#date').type('23rd of Jan').should("have.value","23rd of Jan")
    cy.get('#status').type('Inactive').should("have.value","Inactive")
    cy.wait(1000)
    cy.get('#addEmployee').click()

    cy.url().should('eq', 'http://localhost:8081/employees')

  })
})