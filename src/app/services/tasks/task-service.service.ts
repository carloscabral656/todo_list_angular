import { Injectable } from '@angular/core';
import { Task } from '../../entities/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  readonly apiUrl: string;
  private tasks: Task[] = [];

  constructor(
    private http: HttpClient
  ){
    this.apiUrl = "http://localhost:3000";
  }

  public add(task: Task) {
    this.tasks.push(task);
  }

  public getAllTasksFromServer(): void {
    this
      .http
      .get(`${this.apiUrl}/tasks`)
      .subscribe(res => console.log(res));
  }

  public fillTasks(res: any){

  }
}
