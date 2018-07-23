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

  personal_tasks: Array<any>;
  study_tasks: Array<any>;
  course_tasks: Array<any>;

  constructor(public http: HttpClient) {
    this.base_url = "http://localhost:5000/task"
    this.personal_tasks = null;
    this.study_tasks = null;
    this.course_tasks = null;
  }

  load() {
    // return new Promise( resolve => {
    //   this.http.get(this.base_url + '/personal')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.personal_tasks = data;
    //       resolve(this.personal_tasks)
    //     });
    // });
  }

}
