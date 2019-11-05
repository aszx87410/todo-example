/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements
  it('Add todo', () => {
    cy.get('.todo-input')
      .type('todo1').should('have.value', 'todo1')

    cy.get('.add-todo').click()
    cy.get('.todo-item:nth-child(1)')
      .find('.todo-item__content').should('contain', 'todo1')

    cy.get('.todo-input')
      .type('todo2').should('have.value', 'todo2')

    cy.get('.add-todo').click()
    cy.get('.todo-item:nth-child(2)')
      .find('.todo-item__content').should('contain', 'todo2')
  })

  it('Delete todo', () => {
    cy.get('.todo-input')
      .type('todo1').should('have.value', 'todo1')

    cy.get('.add-todo').click()
    cy.get('.todo-item').should('have.length', 1)

    cy.get('.todo-item:nth-child(1)')
      .find('.todo-item__delete').click()

    cy.get('.todo-item').should('have.length', 0)
  })
})
