import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public routingList = [
    { link: '/', title: 'Dodaj dokument do akceptacji' },
    { link: 'archive/add', title: 'Dodaj dokument do archiwum' },
    { link: 'archive', title: 'Archiwum' },
  ];
}
