import { Component } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import {TaskProvider} from "../../providers/task/task";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";

mobiscroll.settings = {
    theme: 'ios'
};

var now = new Date();

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  studyTasks: any = [];
  personalTasks: any = [];
  courseTasks: any = [];

  labelDays: Array<any> = [];

  constructor(private taskProvider: TaskProvider) {
    this.loadTasks();
    console.log(this.labelDays);
  }

  loadTasks() {
      this.taskProvider.loadTasks().then(data => {
        this.personalTasks = data;
        this.mapTasksToCalendar();
        console.log('personal tasks:', this.personalTasks);
      });
        // this.personalTasks = res.personalTasks;
        // this.studyTasks = res.studyTasks;
        // this.courseTasks = res.courseTasks;
      // });
  }

  mapTasksToCalendar() {
    for(let task of this.personalTasks) {
      this.labelDays.push({
        d: now,
        text: task.title,
        color: '#00aabb'
      });
    }
  }


}
