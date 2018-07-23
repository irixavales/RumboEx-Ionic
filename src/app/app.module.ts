import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RouterModule } from "@angular/router";

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {CalendarComponent} from "../components/calendar/calendar";
import {DayScheduleComponent} from "../components/day-schedule/day-schedule";
import {WeekScheduleComponent} from "../components/week-schedule/week-schedule";
import {IndividualCourseComponent} from "../components/individual-course/individual-course";
import { TaskProvider } from '../providers/task/task';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CalendarComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    IndividualCourseComponent
  ],
  imports: [ 
    MbscModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    IonicModule.forRoot(MyApp),
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CalendarComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    IndividualCourseComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider
  ]
})
export class AppModule {}
