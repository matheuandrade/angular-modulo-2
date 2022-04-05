import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component'
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})

export class HomeModule {}
