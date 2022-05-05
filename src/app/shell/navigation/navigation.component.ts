import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public isClient$ = this.store.select((state) => state.isLogged.isClient);
  public routingListIceman = [
    { link: 'iceman/config', title: 'Konfiguracja możliwości' },
    { link: 'iceman/new-client', title: 'Dodaj nowego klienta' },
  ];
  public routingListClient = [
    { link: 'client', title: 'Lista wszystkich lodów' },
    { link: 'client/favorite-ice-cream', title: 'Lista ulubionych lodów' },
  ];
  public routingCartClient = {
    link: 'client/ice-cream-cart',
    title: 'Koszyk zamówienia',
  };

  constructor(private store: Store<AppState>) {}
}
