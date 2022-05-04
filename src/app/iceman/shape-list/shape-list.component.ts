import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { formArray } from 'src/app/shared/model/formArrat';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeListComponent implements OnInit {
  public iceCreamOptions: string[] = ['Truskawkowe', 'Czekoladowe', 'Wniliowe'];
  public capacityOptions: number[] = [0.5, 1, 2, 3, 5];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onClose() {
    this.router.navigate(['app/iceman']);
  }

  public onSubmitIceCream(form: formArray[]) {
    form.forEach((iceCream) => {
      for (let value of Object.values(iceCream)) {
        this.iceCreamOptions.push(value);
      }
    });
  }

  public onSubmitCapacity(form: formArray[]) {
    form.forEach((capacity) => {
      for (let value of Object.values(capacity)) {
        this.capacityOptions.push(+value);
      }
    });
  }

  public onRemoveIceCream(index: number) {
    this.iceCreamOptions = this.iceCreamOptions.filter((_, i) => i !== index);
  }

  public onRemoveCapacity(index: number) {
    this.capacityOptions = this.capacityOptions.filter((_, i) => i !== index);
  }
}
