
describe('Collection page', () => {
    context('when navigating', () => {
        before(() => {
            cy.visit('http://localhost:3000/collection')
        })

        it('Displays the main title', () => {
            cy.contains("Faites le tour des idées ajoutées par la communauté")
        })
        it('Displays the list of gift ideas', () => {
            // TODO: Find a way to wait for response before testing
            const expectedCount = 20;

            cy.contains(`${expectedCount} idées de cadeaux`)
            cy.wait(`main div.card-body`).should("have.length", expectedCount)
        })


        it('Displays the footer', () => {
            cy.get(`footer`).should("have.length", 1)
            cy.contains("Open data")
            cy.contains("Code source")
            cy.contains("Mentions légales")
        })
    })
})
