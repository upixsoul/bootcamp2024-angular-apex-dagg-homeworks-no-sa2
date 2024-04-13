import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
 },
 {
  path: 'number1',
    loadChildren: () => import('../app/number1/number1.module').then(x => x.Number1Module)
},
{
  path: 'number2',
  loadChildren: () => import('../app/number2/number2.module').then(x => x.Number2Module)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
