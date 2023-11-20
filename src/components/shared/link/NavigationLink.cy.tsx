import NavigationLink from './NavigationLink';

describe('<NavigationLink /> tests', () => {
  it('should render and display the sample text prop', () => {
    const sampleText = 'Hello World';
    cy.mount(<NavigationLink href={'/'} />);
    cy.get('div').contains(sampleText).should('be.visible');
  });
});

export {};
