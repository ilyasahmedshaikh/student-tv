import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';
import { PresentationalService } from '../../core/services/presentational/presentational.service';
import { CheckLoginService } from '../../core/services/checkLogin/check-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  backBtnState: boolean = false;
  headerShow: boolean = true;

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;

  userData: any = {};

  constructor(
    private router: Router,
    private backNavigateService: BackNavigateService,
    private location: Location,
    private presentationalS: PresentationalService,
    private user: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.backNavigateService.back.subscribe(res => {
      this.backBtnState = res;
    });

    this.presentationalS.header.subscribe(res => {
      this.headerShow = res;
    })

    this.userData = this.user.getData();
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section
    this.fadeSection = !this.fadeSection;
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

  back() {
    this.backNavigateService.backLocation();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

}
