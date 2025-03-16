describe('Searh Fiel Filter', () => {
  beforeEach(() => {
    cy.visit('https://vite-react-alpha-lemon.vercel.app/');
  });

  it('field filtering #1', () => {

    cy.get('.MuiInputBase-input').type('Summer Breeze').should('have.value', 'Summer Breeze'.toLowerCase());

    cy.get('.MuiGrid-grid-xs-4 > .MuiTypography-root').should('have.text', 'Summer Breeze');

  });

  it('field filtering #2', () => {

    cy.get('.MuiInputBase-input').type('Winter Winds').should('have.value', 'Winter Winds'.toLowerCase());

    cy.get('.MuiGrid-grid-xs-4 > .MuiTypography-root').should('have.text', 'Winter Winds');

  });

})
