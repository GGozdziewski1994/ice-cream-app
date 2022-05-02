import { render, screen } from '@testing-library/angular';
import { NavigationComponent } from '../navigation/navigation.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeaderComponent } from './header.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
describe('HeaderComponent', () => {
  it('should render img with alt: "logo-envelo"', async () => {
    await render(HeaderComponent, {
      declarations: [DropdownComponent, UserIconComponent, NavigationComponent, UserProfileComponent],
    });

    expect(screen.queryByAltText('logo-envelo')).toBeInTheDocument();
  });
});
