import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { formArray } from '../../model/formArrat';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormArrayComponent implements OnInit {
  @Output() public formEmmit = new EventEmitter<formArray[]>();
  @Input() public labelName!: string;
  public form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    this.formEmmit.emit(this.form.value.name);

    this.initForm();
  }

  public onAddFormArray() {
    (<FormArray>this.form.get('name')).push(
      new FormGroup({
        name: new FormControl(null),
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
