import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOrder } from 'src/app/shared/model/userOrde';
import { IcemanService } from 'src/app/shared/services/iceman/iceman.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent implements OnInit {
  public orders$!: Observable<UserOrder[]>;

  constructor(private icemanService: IcemanService) {}

  ngOnInit(): void {
    this.orders$ = this.icemanService.getOrdersList();
  }
}
