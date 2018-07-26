import { Component } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import {TaskProvider} from "../../providers/task/taskProvider";
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

    this.addPersonalTask();
  }

  loadTasks() {

    this.taskProvider.loadStudyTasks().then(data => {
        this.studyTasks = data;
        this.mapTasksToCalendar();
        console.log('study tasks:', this.studyTasks);
      });

    this.taskProvider.loadPersonalTasks().then(data => {
        this.personalTasks = data;
        this.mapTasksToCalendar();
        console.log('personal tasks:', this.personalTasks);
      });

    this.taskProvider.loadCourseTasks().then(data => {
        this.courseTasks = data;
        this.mapTasksToCalendar();
        console.log('course tasks:', this.courseTasks);
      });

  }

  mapTasksToCalendar() {

    for(let task of this.personalTasks) {
      this.labelDays.push({
        d: now,
        text: task.title,
        color: '#00aabb',
        description: task.description
      });
      // console.log(typeof task.start);
    }

    for(let task of this.studyTasks) {
      this.labelDays.push({
        d: now,
        text: task.title,
        color: '#6e7f29',
        description: task.description
      })
    }

    for(let task of this.courseTasks) {
      this.labelDays.push({
        d: now,
        text: task.title,
        color: '#de3d83',
        description: task.description
      })
    }
  }

  addPersonalTask() {
    this.taskProvider.addPersonalTask(
      'eat',
      'because im hungry',
      now,
      now
    );
  }

}
