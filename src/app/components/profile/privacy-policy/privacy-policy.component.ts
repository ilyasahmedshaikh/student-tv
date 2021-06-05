import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PresentationalService } from '../../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private presentationalS: PresentationalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.presentationalS.setPresentation('header', false);
    this.presentationalS.setPresentation('bottomBar', false);
  }

  back() {
    this.location.back();
  }

}
