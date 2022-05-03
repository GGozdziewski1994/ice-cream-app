import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shape-list',
  templateUrl: './shape-list.component.html',
  styleUrls: ['./shape-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeListComponent implements OnInit {
  public iceCreamOptions: string[] = ['Truskawkowe', 'Czekoladowe', 'Wniliowe'];
  public capacityOptions: number[] = [0.5, 1, 2, 3, 5];
  public iceCreamForm!: FormGroup;
  public capacityForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initIceCreamForm();
    this.initCapacityForm();
  }

  public onClose() {
    this.router.navigate(['app/iceman']);
  }

  public onSubmitIceCream() {
    this.iceCreamForm.value.iceCream.forEach(
      (iceCream: { iceCream: string }) => {
        for (let value of Object.values(iceCream)) {
          this.iceCreamOptions.push(value);
        }
      }
    );

    this.initIceCreamForm();
  }

  public onSubmitCapacity() {
    this.capacityForm.value.capacity.forEach(
      (capacity: { capacity: number }) => {
        for (let value of Object.values(capacity)) {
          this.capacityOptions.push(value);
        }
      }
    );

    this.initCapacityForm();
  }

  public onRemoveIceCream(index: number) {
    this.iceCreamOptions = this.iceCreamOptions.filter((el, i) => i !== index);
  }

  public onRemoveCapacity(index: number) {
    this.capacityOptions = this.capacityOptions.filter((el, i) => i !== index);
  }

  public onAddIceCream() {
    (<FormArray>this.iceCreamForm.get('iceCream')).push(
      new FormGroup({
        iceCream: new FormControl(null),
      })
    );
  }

  public onAddCapacity() {
    (<FormArray>this.capacityForm.get('capacity')).push(
      new FormGroup({
        capacity: new FormControl(null),
      })
    );
  }

  public onRemoveIceCreamFormArray(index: number) {
    (<FormArray>this.iceCreamForm.get('iceCream')).removeAt(index);
  }

  public onRemoveCapacityFormArray(index: number) {
    (<FormArray>this.capacityForm.get('capacity')).removeAt(index);
  }

  public get iceCreamFormArray() {
    return (<FormArray>this.iceCreamForm.get('iceCream')).controls;
  }

  public get capacityFormArray() {
    return (<FormArray>this.capacityForm.get('capacity')).controls;
  }

  private initIceCreamForm() {
    this.iceCreamForm = new FormGroup({
      iceCream: new FormArray([]),
    });
  }

  private initCapacityForm() {
    this.capacityForm = new FormGroup({
      capacity: new FormArray([]),
    });
  }
}
