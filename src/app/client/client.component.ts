import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientService } from '../shared/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.checkShippedOrder();
  }

  public getLastOrderClient() {
    this.clientService.getLastOrder();
  }
}
