describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.wait(3000)
    cy.get('#client-id').type('2').should("have.value","2")
    cy.contains('Get Data By Client Id').click()


  })
})