import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum AppRoutes {
  HOME = 'home',
  TOURS = 'tours',
  CONTACT = 'contact'
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.HOME},

 {
    path: AppRoutes.TOURS,
    loadChildren: () =>
      import('./pages/tours/tours.module').then((m) => m.ToursModule),
  },
  {
    path: AppRoutes.CONTACT,
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    redirectTo: AppRoutes.HOME,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
