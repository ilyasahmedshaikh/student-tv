import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies-listing',
  templateUrl: './studies-listing.component.html',
  styleUrls: ['./studies-listing.component.scss']
})
export class StudiesListingComponent implements OnInit {

  data: any = [
    {
      degree: "Degree 1",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    },
    {
      degree: "Degree 2",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    },
    {
      degree: "Degree 3",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
