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
        this.mapStudyTaskToCalendar();
        console.log('study tasks:', this.studyTasks);
      });

    this.taskProvider.loadPersonalTasks().then(data => {
        this.personalTasks = data;
        this.mapPersonalTaskToCalendar();
        console.log('personal tasks:', this.personalTasks);
      });

    this.taskProvider.loadCourseTasks().then(data => {
        this.courseTasks = data;
        this.mapCourseTaskToCalendar();
        console.log('course tasks:', this.courseTasks);
      });

  }

  mapTasksToCalendar(task) {
    this.labelDays.push({
      d: now,
      text: task.title,
      color: '#00aabb',
      description: task.description
      // console.log(typeof task.start);
    });
  }

  mapStudyTaskToCalendar() {
    for(let task of this.studyTasks) {
      this.mapTasksToCalendar(task);
    }
  }

  mapPersonalTaskToCalendar() {
    for(let task of this.personalTasks) {
      this.mapTasksToCalendar(task);
    }
  }

  mapCourseTaskToCalendar() {
    for(let task of this.courseTasks) {
      this.mapTasksToCalendar(task);
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
