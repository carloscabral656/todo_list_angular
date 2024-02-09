import { Component } from '@angular/core';
import { TaskService } from '../../services/tasks/task-service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Task } from '../../entities/task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  constructor(
    private taskService: TaskService,
    public task?: Task,
  ) {}

  public createTask(){
    if(this.task)
      this.taskService.createTask(this.task);
  }
}
