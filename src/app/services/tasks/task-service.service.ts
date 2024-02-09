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

  public getAllTasks(): Task[]{
    return this.tasks;
  }

  public getAllTasksFromServer(){
    let tasks = this
      .http
      .get<Task[]>(`${this.apiUrl}/tasks`)
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks
      });
  }

  public fillTasks(res: any){
    res.foreach((r: any) => {
      this.tasks.push(r);
    });
  }

  public createTask(task: Task){
    let tasks = this
    .http
    .post<Task>(`${this.apiUrl}/tasks`, task)
    .subscribe(() => {
      this.getAllTasksFromServer();
    });
  }

  public updateTask(task: Task){
    let updatedTask = this
    .http
    .put<Task>(`${this.apiUrl}/tasks/${task.id}`, task)
    .subscribe(() => {
      this.getAllTasksFromServer()
    });
    return updatedTask;
  }

  public deleteTask(task: Task){
    let deleted = this
    .http
    .delete<Task>(`${this.apiUrl}/tasks/${task.id}`)
    .subscribe(() => {
      this.getAllTasksFromServer();
    });
  }

}
