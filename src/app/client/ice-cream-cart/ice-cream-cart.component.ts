import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ice-cream-cart',
  templateUrl: './ice-cream-cart.component.html',
  styleUrls: ['./ice-cream-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamCartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
