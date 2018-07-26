import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CalendarComponent} from "../components/calendar/calendar";
import {DayScheduleComponent} from "../components/day-schedule/day-schedule";
import {WeekScheduleComponent} from "../components/week-schedule/week-schedule";
import {IndividualCourseComponent} from "../components/individual-course/individual-course";
import {PopupComponent} from "../components/popup/popup";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  dividers: Array<{title: string, open: Boolean, pages: Array<any>}>;
  course_pages: Array<{title: string, component: any}>;
  schedule_pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.schedule_pages = [
      { title: 'Today', component: DayScheduleComponent },
      { title: 'This Week', component: WeekScheduleComponent },
      { title: 'Calendar', component: CalendarComponent }
    ];

    this.course_pages = [
      { title: 'this is hardcoded', component: IndividualCourseComponent },
      { title: 'Mate', component: IndividualCourseComponent },
      { title: 'Icom', component: CalendarComponent },
      { title: 'Quim', component: HelloIonicPage },
      { title: 'Inge', component: HelloIonicPage }
    ];

    // dividers in side menu
    this.dividers = [
      { title: 'Dashboard', open: false, pages: this.schedule_pages },
      { title: 'Courses', open: false, pages: this.course_pages },
      { title: 'Schedule', open: false, pages: this.schedule_pages }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleDivider(divider) {
    // close other dividers
    this.dividers.map(divider => divider.open = false);
    // open selected divider if closed
    if(divider.open == false) {
      divider.open = true;
    }
    // close selected divider if opened
    else {
      divider.open = false;
    };
  }

  openPage(page) {
    // close all dividers
    this.dividers.map(divider => divider.open = false);
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
