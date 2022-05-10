import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { formArray } from 'src/app/shared/model/formArrat';
import { ListOptionService } from 'src/app/shared/services/lists-option/lists-option.service';

export interface ResultDatabase {
  payload: {
    key: string;
    val: () => string | number;
  };
}
@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeListComponent implements OnInit {
  public iceCreamOptions$!: Observable<any>;
  public capacityOptions$!: Observable<any>;
  public iceCreamName$!: Observable<string[]>;
  public capacityValue$!: Observable<string[]>;

  constructor(
    private listOptionService: ListOptionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.iceCreamOptions$ = this.listOptionService.getIceCreamList();
    this.capacityOptions$ = this.listOptionService.getCapacityList();
    this.iceCreamName$ = this.listOptionService.getIceCreamListName();
    this.capacityValue$ = this.listOptionService.getCapacityListValue();
  }

  public onClose() {
    this.router.navigate(['app/iceman']);
  }

  public onSubmitIceCream(value: string) {
    this.listOptionService.addIceCreamToList(value);
  }

  public onSubmitCapacity(value: string) {
    this.listOptionService.addCapacityToList(value);
  }

  public onRemoveIceCream(iceCream: string) {
    this.listOptionService.removeIceCream(iceCream);
  }

  public onRemoveCapacity(capacity: string) {
    this.listOptionService.removeCapacity(capacity);
  }
}
