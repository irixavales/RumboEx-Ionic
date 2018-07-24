import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

  base_url: string;

  personalTasks: Array<any>;
  studyTasks: Array<any>;
  courseTasks: Array<any>;

  constructor(public http: HttpClient) {
    this.base_url = "http://localhost:5000/task";
    this.personalTasks = [];
    this.studyTasks = [];
    this.courseTasks = [];
  }

  loadTasks() {
    // let tasks = {};
    // tasks['personal'] = this.http.get(this.base_url + '/personal').map(res => res.json());
    // tasks['study'] = this.http.get(this.base_url + '/study').map(res => res.json())
    // tasks['course'] = this.http.get(this.base_url + '/course').map(res => res.json())
    // console.log(tasks);
    // return tasks;
    return new Promise(resolve => {
      this.http.get(this.base_url + '/personal/2')
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log(error);
        });
    });
  }
}
