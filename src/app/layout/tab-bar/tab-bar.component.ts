import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../core/services/presentational/presentational.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  tabBarShow: boolean = true;

  constructor(
    private backNavigateService: BackNavigateService,
    private presentationalS: PresentationalService
  ) { }

  ngOnInit(): void {
    this.presentationalS.bottomBar.subscribe(res => {
      this.tabBarShow = res;
    })
  }

  toggleBack(state: any) {
    this.backNavigateService.toggleBackState(state);
  }

}
