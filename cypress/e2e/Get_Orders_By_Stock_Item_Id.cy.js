describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8081/orders')
    cy.wait(3000)
    cy.origin('https://dev-7b5hpbimp84vnhto.us.auth0.com', () => {
      cy.get('#username').type('employee1@uml.org')
      cy.get('#password').type('3x4mpl3!')
      cy.get('[name="action"]').click()
    })
    cy.get('#stock-id').type('7486504').should("have.value","7486504")
    cy.contains('Get Data By Stock Item Id').click()


  })
})