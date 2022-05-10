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

  constructor(
    private listOptionService: ListOptionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.iceCreamOptions$ = this.listOptionService.getIceCreamList();
    this.capacityOptions$ = this.listOptionService.getCapacityList();
  }

  public onClose() {
    this.router.navigate(['app/iceman']);
  }

  public onSubmitIceCream(form: formArray[]) {
    form.forEach((iceCream) => {
      for (let value of Object.values(iceCream)) {
        this.listOptionService.addIceCreamToList(value);
      }
    });
  }

  public onSubmitCapacity(form: formArray[]) {
    form.forEach((capacity) => {
      for (let value of Object.values(capacity)) {
        this.listOptionService.addCapacityToList(value);
      }
    });
  }

  public onRemoveIceCream(iceCream: string) {
    this.listOptionService.removeIceCream(iceCream);
  }

  public onRemoveCapacity(capacity: string) {
    this.listOptionService.removeCapacity(capacity);
  }
}
