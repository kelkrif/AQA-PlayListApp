describe('Add Track', () => {
  beforeEach(() => {
    cy.visit('https://vite-react-alpha-lemon.vercel.app/');
  });

  it('check & add track', () => {
    cy.get(':nth-child(1) > .MuiGrid-grid-xs-4 > .MuiTypography-root').should('have.text', 'Summer Breeze');
  
    cy.get('.MuiButton-root').first().click();

    cy.get('#playlist > .MuiBox-root > :nth-child(2) > .MuiGrid-grid-xs-4 > .MuiTypography-root').should('have.text', 'Summer Breeze');
})
})