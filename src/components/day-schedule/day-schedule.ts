import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { TaskProvider } from "../../providers/task/taskProvider";

let now = new Date();

@Component({
  selector: 'day-schedule',
  templateUrl: 'day-schedule.html'
})
export class DayScheduleComponent {

  studyTasks: any = [];
  personalTasks: any = [];
  courseTasks: any = [];

  events: Array <any> = [];

  constructor(private taskProvider: TaskProvider) {
    this.loadTasks();
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

  mapTasksToCalendar(task, color) {
    this.events.push({
      d: now,
      text: task.title,
      color: color,
      description: task.description
    });
    // console.log(task.);
  }

  mapStudyTaskToCalendar() {
    for(let task of this.studyTasks) {
      this.mapTasksToCalendar(task, '#339966');
    }
  }

  mapPersonalTaskToCalendar() {
    for(let task of this.personalTasks) {
      this.mapTasksToCalendar(task, '#cc9900');
    }
  }

  mapCourseTaskToCalendar() {
    for(let task of this.courseTasks) {
      this.mapTasksToCalendar(task, '#f67944');
    }
  }



  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    display: 'inline',
    view: {
      calendar: { type: 'week' },
      eventList: { type: 'day' }
      }
  };
}
