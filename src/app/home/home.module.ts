import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  // The HomeComponent is exported so that it can be used in other modules.
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
