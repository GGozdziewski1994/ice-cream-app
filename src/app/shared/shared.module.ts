import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [AuthenticationComponent, ModalComponent, FormArrayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [AuthenticationComponent, ModalComponent, FormArrayComponent],
})
export class SharedModule {}
