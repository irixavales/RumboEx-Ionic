import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
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
import {PopupComponent} from "../components/popup/popup";
import { TaskProvider } from '../providers/task/taskProvider';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CalendarComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    IndividualCourseComponent,
    PopupComponent
  ],
  imports: [ 
    MbscModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
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
    IndividualCourseComponent,
    PopupComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider
  ]
})
export class AppModule {}
