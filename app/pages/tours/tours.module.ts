import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursComponent } from './container/tours.component';
import { ToursSingleComponent } from './container/tours-single/tours-single.component';
import { TourDetailsComponent } from './container/tour-details/tour-details.component';


@NgModule({
  declarations: [
    ToursComponent,
    ToursSingleComponent,
    TourDetailsComponent,
  ],
  imports: [
    CommonModule,

  ]
})
export class ToursModule { }

