describe('Phoebus front-page tests', () => {
  it('should correctly visit and render the main page', () => {
    cy.visit('https://www.phoebus.com.br/');
  });

  it('clicks to redirect to Phoebus` about us', () => {
    cy.xpath('//*[@id="menu-item-54"]/a/cufon[2]/canvas').click();
  });

  it('should click on `Nossa História` to redirect to Phoebus` history', () => {
    cy.xpath('//*[@id="quem-somos"]/div/div/ul/li[1]/a').click();
  });

  it('should render a `H3 - Revolução do Conceito de POS` on screen', () => {
    cy.xpath('//*[@id="nossahistoria"]/div/div[2]/div[4]/div[1]/h3');
  });
  it('confirms that `Nossos Diferenciais` are available', () => {
    cy.get('select').select('https://www.phoebus.com.br/quem-somos/diferenciais/')
  });

  it('returns to the main page', () => {
    cy.xpath('//*[@id="content-header"]/h1/a/img').click();
  });
});

describe('Test on the search tool', () => {
  it('should correctly visit and render the main page', () => {
    cy.visit('https://www.phoebus.com.br/');
  });

  it('is possible to search for a regular query, like `orçamento`', (done) => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('Cannot read properties of undefined')

      done()

      return false
    })
    cy.xpath('//*[@id="busca"]/fieldset[1]/input').type('orcamento').type('{enter}');
  });

  it('should render two topics: Paystore and TEF Dedicado', () => {
    cy.xpath('//*[@id="resultadobuscas"]/div/div[2]/ul/li[1]/h5/a')
    cy.xpath('//*[@id="resultadobuscas"]/div/div[2]/ul/li[2]/h5/a')
    cy.get('h5').should('have.length', 2);
  });

  it('nevertheless, it should have at least one element on page, even with a failed search', () => {
    cy.get('h5').should('have.length.above', 0);
  });
});

describe('Test the contact forms', () => {
  it('must redirect to `Entre em Contato` page', () => {
    cy.visit('https://www.phoebus.com.br/');

    cy.xpath('//*[@id="menu-item-52"]/a').click();
  });

  it('should be possible to fill the forms and send the message', () => {
    cy.xpath('//*[@id="wpcf7-f118-p14-o1"]/form/fieldset[1]/span[1]/input').type('cliente teste phoebus');
    cy.xpath('//*[@id="wpcf7-f118-p14-o1"]/form/fieldset[1]/span[2]/input').type('cliente@test.com.br');
    cy.xpath('//*[@id="wpcf7-f118-p14-o1"]/form/fieldset[1]/span[3]/input').type('83999999999');
    cy.xpath('//*[@id="wpcf7-f118-p14-o1"]/form/fieldset[2]/span/textarea').type('Olá, caros da Phoebus! Aqui é um teste! Por Carlos');

    cy.xpath('//*[@id="wpcf7-f118-p14-o1"]/form/fieldset[2]/input').click();
  });

});