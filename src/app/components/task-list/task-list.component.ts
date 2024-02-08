import { CommonModule, NgClass, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../entities/task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/tasks/task-service.service';
import { TaskComponent } from '../task/task.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  
  constructor(
    public taskService: TaskService,
  ){ }

  ngOnInit(): void {
    this.taskService.getAllTasksFromServer();
  }

}
