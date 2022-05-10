import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormArrayComponent implements OnInit {
  @Output() public formEmmit = new EventEmitter<string>();
  @Input() public labelName!: string;
  @Input() public type!: string;
  @Input() public options!: string[];
  public form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    const values: { name: string }[] = this.form.value.name;
    for (let value of values) {
      if (
        this.options
          .map((el) => el.toLowerCase())
          .includes(value.name.toLowerCase())
      )
        return;
      else this.formEmmit.emit(value.name);
    }

    this.initForm();
  }

  public onAddFormArray() {
    (<FormArray>this.form.get('name')).push(
      new FormGroup({
        name: new FormControl(null, [
          this.type === 'number'
            ? Validators.pattern('^[0-9]*$')
            : Validators.minLength(3),
        ]),
      })
    );
  }

  public onRemoveFormArray(index: number) {
    (<FormArray>this.form.get('name')).removeAt(index);
  }

  public get formArray() {
    return (<FormArray>this.form.get('name')).controls;
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormArray([]),
    });
  }
}
