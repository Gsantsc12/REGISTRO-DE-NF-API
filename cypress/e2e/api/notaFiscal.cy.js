describe('Teste API registrarNotaFiscal', () => {
  it('Deve registrar nota fiscal com payload do arquivo JSON', () => {
    const token = Cypress.env('token'); // agora seguro

    cy.fixture('notaFiscalPayload').then((payload) => {
      cy.notaFiscal(payload, token).then((response) => {
        cy.log('Status: ' + response.status);
        cy.log('Response body:', JSON.stringify(response.body, null, 2));
        expect(response.status).to.eq(200);
      });
    });
  });
});
