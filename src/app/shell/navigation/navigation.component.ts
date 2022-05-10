import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  public isClient$ = this.store.select((state) => state.isLogged.isClient);
  public routingListIceman = [
    { link: 'iceman/config', title: 'Oferta fabryki lodów' },
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
  public total$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.total$ = this.store.select((state) => state.order.total);
  }
}
