import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Number2Component } from './number2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component: Number2Component }
];

@NgModule({
  declarations: [Number2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Number2Module { }
