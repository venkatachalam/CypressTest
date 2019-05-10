describe('todos API', () => {
  it('returns JSON', () => {
    cy.request('https://reqres.in/api/users/2')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
})
