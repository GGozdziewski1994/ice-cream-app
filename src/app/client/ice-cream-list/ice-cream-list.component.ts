import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IceCreamListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
