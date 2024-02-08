import { Component, Input, input } from '@angular/core';
import { Task } from '../../entities/task';
import { TaskService } from '../../services/tasks/task-service.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() public task!: Task;
}
