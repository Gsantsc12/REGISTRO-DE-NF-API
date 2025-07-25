
Cypress.Commands.add('notaFiscal', (body) => {
  const token = Cypress.env('token');
  const baseUrl = Cypress.env('baseApiUrl');

  return cy.request({
    method: 'POST',
    url: `${baseUrl}/registrarNotaFiscal/`,
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    },
    body,
    failOnStatusCode: false
  }).then((response) => {
    return cy.wrap(response).as('response');
  });
});
