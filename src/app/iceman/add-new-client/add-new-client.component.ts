import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
