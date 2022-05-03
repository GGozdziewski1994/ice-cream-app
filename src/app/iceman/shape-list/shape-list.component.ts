import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
