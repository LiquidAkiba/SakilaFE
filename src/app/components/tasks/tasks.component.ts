import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import {Task} from '../../Task'
import { Actor } from 'src/app/Actors';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; 

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getActors().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService.deleteTasks(task).subscribe((tasks) => (this.tasks = this.tasks.filter( t=> t.id! === task.id)));
  }

  addActor(task: Task) {
    this.taskService.addActor(task).subscribe((task) => (this.tasks.push(task)));
  }
}
