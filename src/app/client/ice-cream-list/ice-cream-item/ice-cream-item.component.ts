import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ice-cream-item',
  templateUrl: './ice-cream-item.component.html',
  styleUrls: ['./ice-cream-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IceCreamItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
