describe('Tracks Duration', () => {
  beforeEach(() => {
    cy.visit('https://vite-react-alpha-lemon.vercel.app/');
  });

  it('add & check time duration', () => {
    let totalDuration = 0;
  
    cy.get('#playlist-duration').should('have.text', 'No tracks on playlist');

    cy.get('.MuiGrid-grid-xs-2 > .MuiTypography-root').each(($el) => {
      let trackDuration = $el.text().trim();
      let [minutes, seconds] = trackDuration.split(':').map(Number);

      totalDuration += (minutes * 60) + seconds;

    }).then(() => {

      cy.get('.MuiButton-root').click({ multiple: true });
      
      cy.get('#playlist-duration').should('have.text', totalDuration.toString());
    });
})
})