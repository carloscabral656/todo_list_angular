import { Component } from '@angular/core';
import { TaskService } from '../../services/tasks/task-service.service';
import { Task } from '../../entities/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  constructor(
    private taskService: TaskService,
    private httpClient: HttpClient
  ){}

  public createTask(task: Task){
    this.taskService.add(task);
  }
}
