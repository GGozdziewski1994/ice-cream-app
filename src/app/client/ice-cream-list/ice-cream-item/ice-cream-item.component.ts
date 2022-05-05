import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { OrderActions } from 'src/app/store/order/order.actions';
import { OrderState } from 'src/app/store/order/order.state';

@Component({
  selector: 'app-ice-cream-item',
  templateUrl: './ice-cream-item.component.html',
  styleUrls: ['./ice-cream-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamItemComponent implements OnInit {
  public order!: OrderState;
  public orderForm!: FormGroup;
  @Input() public iceCream!: string[];
  @Input() public capacity!: number[];

  constructor(private sotre: Store<AppState>) {}

  ngOnInit(): void {
    this.initOrderForm();
  }

  public onSubmit() {
    this.order = {
      name: this.iceCream,
      ...this.orderForm.value,
    };
    this.sotre.dispatch(OrderActions.addOrder(this.order));
  }

  private initOrderForm() {
    this.orderForm = new FormGroup({
      amount: new FormControl(null),
      capacity: new FormControl(null),
    });
  }
}
