import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-listing',
  templateUrl: './experience-listing.component.html',
  styleUrls: ['./experience-listing.component.scss']
})
export class ExperienceListingComponent implements OnInit {

  data: any = [
    {
      company: "Company 1",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    },
    {
      company: "Company 2",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    },
    {
      company: "Company 3",
      designation: "Designation",
      dateFrom: "Jan 2019",
      dateTo: "Feb 2021"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
