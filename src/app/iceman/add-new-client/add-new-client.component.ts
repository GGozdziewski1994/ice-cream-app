import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewClientComponent {
  constructor(private router: Router) {}

  public onClose() {
    this.router.navigate(['app/iceman']);
  }
}
