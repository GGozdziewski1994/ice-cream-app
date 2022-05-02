import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favorite-ice-cream',
  templateUrl: './favorite-ice-cream.component.html',
  styleUrls: ['./favorite-ice-cream.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteIceCreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
