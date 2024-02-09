import { Component, Input, NgModule } from '@angular/core';
import { Task } from '../../entities/task';
import { TaskService } from '../../services/tasks/task-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() public task!: Task;

  constructor(
    public taskService: TaskService,
  ){}

  public updateTask(){
    this.taskService.updateTask(this.task);
  }

  public deleteTask(){
    this.taskService.deleteTask(this.task);
  }
}
