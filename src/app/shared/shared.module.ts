import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthenticationComponent],
})
export class SharedModule {}
