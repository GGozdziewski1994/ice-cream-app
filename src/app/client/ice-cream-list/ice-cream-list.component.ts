import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamListComponent implements OnInit {
  public iceCreamList$!: Observable<any>;
  public capacityList$!: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.iceCreamList$ = this.apiService.getIceCreamListName();
    this.capacityList$ = this.apiService.getCapacityListValue();
  }
}
