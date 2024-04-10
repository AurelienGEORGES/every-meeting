// describe('accueil', () => {
//     it('successfully loads', () => {
//         cy.visit('http://localhost:3000/')
//         cy.get('a[title="page du Kanban"]').should("be.visible").and("have.attr", "href", "/kanban").and("have.attr", "data-cy", "kanbanLink").click().get('h1').should('have.text', 'Kanban')
//     })
// })

// describe('todolist add', () => {
//     it('successfully add', () => {
//         cy.visit('http://localhost:3000/to-do-list')
//         cy.wait(10000)
//         cy.get('button[data-btn-add="add"]').should('exist').click()
//         cy.get('textarea[id="create-item-content"]').type('test add cypress')
//         cy.get('input[type="datetime-local"]').type('2030-11-22T15:00')
//         cy.get('button[type="submit"]').click()
//         cy.wait(10000)
//         cy.get('button[id="btn-close-modal-add"]').click()
//         cy.contains('p', 'test add cypress').should('exist')
//     })
// })

// describe('todolist update', () => {
//     it('successfully update', () => {
//         cy.visit('http://localhost:3000/to-do-list')
//         cy.wait(10000)
//         cy.get('p[data-cy-update="5"]').should('exist')
//         cy.get('button[data-update-btn-id="5"]').should('exist').click()
//         cy.get('textarea[id="update-item"]').type('test modification cypress')
//         cy.get('input[type="datetime-local"]').type('2024-03-07T13:52')
//         cy.get('button[type="submit"]').click()
//         cy.wait(10000)
//         cy.get('button[id="btn-close-modal-update"]').click()
//         cy.get('p[data-cy-update="5"]').should('have.text', 'test modification cypress')
//     })
// })

// describe('todolist delete', () => {
//     it('successfully delete', () => {
//         cy.visit('http://localhost:3000/to-do-list')
//         cy.wait(5000)
//         cy.get('p[id="4"]').should('exist')
//         cy.get('button[data-id="4"]').click()
//         cy.wait(5000)
//         cy.get('p[id="4"]').should('not.exist')
//     })
// })



