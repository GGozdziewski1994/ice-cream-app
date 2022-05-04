import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { formArray } from 'src/app/shared/model/formArrat';
import { IcemanService } from '../iceman.service';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeListComponent implements OnInit {
  public iceCreamOptions$!: Observable<any>;
  public capacityOptions$!: Observable<any>;

  constructor(private icemanService: IcemanService, private router: Router) {}

  ngOnInit(): void {
    this.iceCreamOptions$ = this.icemanService.getIceCreamList();
    this.capacityOptions$ = this.icemanService.getCapacityList();
  }

  public onClose() {
    this.router.navigate(['app/iceman']);
  }

  public onSubmitIceCream(form: formArray[]) {
    form.forEach((iceCream) => {
      for (let value of Object.values(iceCream)) {
        this.icemanService.addIceCream(value);
      }
    });
  }

  public onSubmitCapacity(form: formArray[]) {
    form.forEach((capacity) => {
      for (let value of Object.values(capacity)) {
        this.icemanService.addCapacity(value);
      }
    });
  }

  public onRemoveIceCream(iceCream: string) {
    this.icemanService.removeIceCream(iceCream);
  }

  public onRemoveCapacity(capacity: string) {
    this.icemanService.removeCapacity(capacity);
  }
}
