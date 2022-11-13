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
