import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AuthenticationComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthenticationComponent, ModalComponent],
})
export class SharedModule {}
