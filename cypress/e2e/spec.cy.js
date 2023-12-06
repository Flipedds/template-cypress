import { faker }from '@faker-js/faker';
describe('template spec', () => {
  it('passes', () => {
    const email = faker.internet.email();
    cy.visit('https://example.cypress.io')
  })
})