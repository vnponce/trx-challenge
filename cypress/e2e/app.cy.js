// https://on.cypress.io/api

describe('App users flows', () => {
  it('search by name', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' }).as(
      'getUsers'
    )

    cy.visit('/')

    cy.findByText(/leanne/i).should('exist')
    cy.findByLabelText('Search').type('Doe')

    cy.findByText(/leanne/i).should('not.exist')
    cy.findByText(/John Doe/i).should('exist')
    cy.findByText(/Jane Doe/i).should('exist')
  })

  it('search by email', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' }).as(
      'getUsers'
    )

    cy.visit('/')
    cy.findByText(/leanne/i).should('exist')

    cy.findByLabelText('Search').type('traxporta')

    cy.findByText(/leanne/i).should('not.exist')
    cy.findByText(/John Doe/i).should('exist')
    cy.findByText(/Jane Doe/i).should('exist')
  })

  it('shows all items when the users click the `clear` button', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', { fixture: 'users.json' }).as(
      'getUsers'
    )

    cy.visit('/')
    cy.findByText(/leanne/i).should('exist')

    cy.findByLabelText('Search').type('traxporta')

    cy.findByText(/leanne/i).should('not.exist')

    // clear the search with the clear button
    cy.findByLabelText('Clear').click()
    cy.findByText(/John Doe/i).should('exist')
  })
})
