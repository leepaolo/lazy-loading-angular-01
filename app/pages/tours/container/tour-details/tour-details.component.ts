import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent {

  constructor(private router: Router){}

}
