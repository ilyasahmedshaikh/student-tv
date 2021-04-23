import { Component, OnInit } from '@angular/core';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-startup-screen',
  templateUrl: './startup-screen.component.html',
  styleUrls: ['./startup-screen.component.scss']
})
export class StartupScreenComponent implements OnInit {

  constructor(
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);
  }

}
