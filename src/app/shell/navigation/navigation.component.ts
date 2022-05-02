import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public routingList = [
    { link: 'config', title: 'Konfiguracja możliwości' },
    { link: 'new-client', title: 'Dodaj nowego klienta' },
  ];

  public routinListClient = [];
}
