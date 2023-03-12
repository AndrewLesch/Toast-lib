describe('Toast tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=app-tests--test-with-panel&viewMode=story');
    cy.get('[data-testid=title]').type('Toast');
  });

  it('should set title', () => {
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast-title]').should(
      'have.text',
      'Toast',
    );
  })

  it('should set description', () => {
    cy.get('[data-testid=description]').type('Toast description');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast-description]').should(
      'have.text',
      'Toast description',
    );
  })

  it('should set color', () => {
    cy.get('[data-testid=color]').select('Red');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast]').should(
      'have.css',
      'background-color',
      'rgb(226, 87, 54)',
    );
  })

  it('should set position', () => {
    cy.get('[data-testid=position]').select('Top right');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast]').should(
      'have.css',
      'right',
      '0px',
    );
  })

  it('should set duration', () => {
    cy.get('[data-testid=duration]').select('7 секунд');
    cy.get('[data-testid=submit]').click();
    cy.wait(6000);
    cy.get('[data-testid=toast-title]').should(
      'have.text',
      'Toast',
    );  
  })

  it('should set margin', () => {
    cy.get('[data-testid=margin]').select('20');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast]').should(
      'have.css',
      'margin',
      '20px',
    );
  })

  it('should set animation', () => {
    cy.get('[data-testid=animation]').select('Scale Animation');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast]').should(
      'have.css',
      'animation',
      '3.1s ease 0s 1 normal none running kZzJMs',
    );
  })

  it('should set type', () => {
    cy.get('[data-testid=type]').select('success');
    cy.get('[data-testid=submit]').click();
    cy.get('[data-testid=toast-icon-success]').should('be.visible')
  })
})