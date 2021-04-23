import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../core/http/config/config.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  getData() {
    this.http.get(this.config.API_BASE_URL + '/api/videos/').subscribe(res => {
      console.log(res);
    })
  }

}
