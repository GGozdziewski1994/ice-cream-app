import { render, screen } from '@testing-library/angular';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  it('should render text: Dodaj dokument do akceptacji', async () => {
    await render(NavigationComponent);

    expect(screen.queryByText('Dodaj dokument do akceptacji')).toBeInTheDocument();
  });

  it('should render text: Dodaj dokument do archiwum', async () => {
    await render(NavigationComponent);

    expect(screen.queryByText('Dodaj dokument do archiwum')).toBeInTheDocument();
  });

  it('should render text: Archiwum', async () => {
    await render(NavigationComponent);

    expect(screen.queryByText('Archiwum')).toBeInTheDocument();
  });
});
