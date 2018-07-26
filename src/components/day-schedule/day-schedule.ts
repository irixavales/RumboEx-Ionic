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
      this.events.push({
        d: now,
        text: task.title,
        color: '#00aabb',
        description: task.description
      });
      // console.log(typeof task.start);
    }

    for(let task of this.studyTasks) {
      this.events.push({
        d: now,
        text: task.title,
        color: '#6e7f29',
        description: task.description
      })
    }

    for(let task of this.courseTasks) {
      this.events.push({
        d: now,
        text: task.title,
        color: '#de3d83',
        description: task.description
      })
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
