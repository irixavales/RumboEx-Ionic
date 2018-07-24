import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { TaskProvider } from "../../providers/task/task";

let now = new Date();

@Component({
  selector: 'day-schedule',
  templateUrl: 'day-schedule.html'
})
export class DayScheduleComponent {

  studyTasks: any = [];
  personalTasks: any;
  courseTasks: any = [];

  constructor(private taskProvider: TaskProvider) {
    this.loadTasks();
  }

  loadTasks() {
      this.taskProvider.loadTasks().then(data => {this.personalTasks = data; console.log('personal tasks:', this.personalTasks)});
        // this.personalTasks = res.personalTasks;
        // this.studyTasks = res.studyTasks;
        // this.courseTasks = res.courseTasks;
      // });
  }

  events: Array < any > = this.personalTasks;


  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    display: 'inline',
    view: {
      calendar: { type: 'week' },
      eventList: { type: 'day' }
      }
  };
}
