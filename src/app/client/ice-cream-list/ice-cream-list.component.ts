import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamListComponent implements OnInit {
  public iceCreamList$!: Observable<any>;
  public capacityList$!: Observable<any>;

  constructor(private clienServices: ClientService) {}

  ngOnInit(): void {
    this.iceCreamList$ = this.clienServices.getIceCreamListName();
    this.capacityList$ = this.clienServices.getCapacityListValue();
  }
}
