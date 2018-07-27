import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  loadStudyTasks() {
    return new Promise(resolve => {
      this.http.get(this.base_url + '/study/37')
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log('error: ', error);
        });
    });
  }

  loadCourseTasks() {
    return new Promise(resolve => {
      this.http.get(this.base_url + '/course/37')
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log('error: ', error);
        });
    });
  }

  loadPersonalTasks() {
    return new Promise(resolve => {
      this.http.get(this.base_url + '/personal/37')
        .subscribe(data => {
          resolve(data);
        }, error => {
          console.log('error: ', error);
        });
    });
  }

  addPersonalTask(title, description, start, end) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let credentials = {
      title: title,
      description: description,
      start: start,
      end: end
    };

    this.http.post(this.base_url + '/personal/37', credentials, {headers: headers})
      .subscribe((res) => {
        // here goes loading dismiss
      }, error => {
        console.log('error: ', error);
      });
  }
}
