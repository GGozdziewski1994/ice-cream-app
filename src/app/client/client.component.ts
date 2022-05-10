import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientOrderService } from '../shared/services/client-order/client-order.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientComponent implements OnInit {
  constructor(private clientService: ClientOrderService) {}

  ngOnInit(): void {
    this.clientService.checkShippedOrder();
  }

  public getLastOrderClient() {
    this.clientService.getLastOrder();
  }
}
