import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/http/config/config.service';

@Component({
  selector: 'app-courses-listing',
  templateUrl: './courses-listing.component.html',
  styleUrls: ['./courses-listing.component.scss']
})
export class CoursesListingComponent implements OnInit {

  data: any = [];
  endpoint: any = this.config.API_BASE_URL + '/course/getAll';

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', true);
    this.presentationalS.setPresentation('bottomBar', true);

    this.getCourses();
  }

  toggleBack(state?: any) {
    this.backNavigateService.toggleBackState(state);
  }

  getCourses() {
    this.http.get(this.endpoint).subscribe(res => {
      this.data = res;
    })
  }

  viewCourse(item: any) {
    this.toggleBack(true);
    this.router.navigate(['/course-management/course-details'], { state: { data: item } });
  }

}
