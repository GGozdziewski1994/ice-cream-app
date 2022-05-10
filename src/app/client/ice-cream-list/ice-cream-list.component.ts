import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOptionService } from 'src/app/shared/services/lists-option/lists-option.service';

@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IceCreamListComponent implements OnInit {
  public iceCreamList$!: Observable<any>;
  public capacityList$!: Observable<any>;

  constructor(private listOptionService: ListOptionService) {}

  ngOnInit(): void {
    this.iceCreamList$ = this.listOptionService.getIceCreamListName();
    this.capacityList$ = this.listOptionService.getCapacityListValue();
  }
}
