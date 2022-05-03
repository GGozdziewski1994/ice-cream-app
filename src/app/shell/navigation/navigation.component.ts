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
    { link: 'config', title: 'Konfiguracja możliwości' },
    { link: 'new-client', title: 'Dodaj nowego klienta' },
  ];
  public routingListClient = [
    { link: 'ice-cream-list', title: 'Lista wszystkich lodów' },
    { link: 'favorite-ice-cream', title: 'Lista ulubionych lodów' },
    { link: 'ice-cream-cart', title: 'Koszyk zamówienia' },
  ];

  constructor(private store: Store<AppState>) {}
}
