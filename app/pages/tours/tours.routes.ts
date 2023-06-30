import { RouterModule, Routes } from '@angular/router';
import { ToursComponent } from './container/tours.component';
import { NgModule } from '@angular/core';



export enum ToursRoutes {
  MAIN = '',
}
const routes: Routes = [

  {
    path: ToursRoutes.MAIN,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ToursComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursRoutesModule {}
