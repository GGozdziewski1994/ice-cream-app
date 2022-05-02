import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-iceman',
  templateUrl: './iceman.component.html',
  styleUrls: ['./iceman.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcemanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
