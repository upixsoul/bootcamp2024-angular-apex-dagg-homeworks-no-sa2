import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Number1Component } from './number1.component';
import { RouterModule, Routes } from '@angular/router';
import { Number1helloComponent } from './number1hello/number1hello.component';

const routes: Routes = [
  { 
    path:"",
    component: Number1Component,
  },
  {
    path:":id",
    component:Number1helloComponent
  }
];

@NgModule({
  declarations: [Number1Component, Number1helloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Number1Module { }
