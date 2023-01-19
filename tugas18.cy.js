describe('Positive Login', () => {

  it('clicking "login" navigates to a new url', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.contains("Username").click()
    cy.contains("Username").type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")

    cy.contains(" Login").click()
  })
})

describe('Negative Login', () => {

  it('clicking "login" navigates to a new url', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.contains("Username").click()
    cy.contains("Username").type("tomsmith")
    cy.get('#password').type("SuperSecretPassword")

    cy.contains(" Login").click()
  })
})