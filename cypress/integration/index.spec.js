
describe('Index page', () => {
    context('when navigating', () => {
        before(() => {
            cy.visit('http://localhost:3000/')
        })

        it('Displays the page description', () => {
            cy.contains("Créez et partagez vos idées de cadeaux")
        })

        it('Displays call to action buttons', () => {
            // Mock article names
            cy.get(`main button`).should("have.length", 2)
        })

        it('Displays the footer', () => {
            // Mock article names
            cy.get(`footer`).should("have.length", 1)
            cy.contains("Open data")
            cy.contains("Code source")
            cy.contains("Mentions légales")
        })
    })
})
