import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-task'
import {Task} from '../../model/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Tasks : Task[] = TASKS

  constructor() { }

  ngOnInit(): void {

  }

  toggleTask(taskItem : Task){

    const taskIndex = this.Tasks.findIndex(c => c.id === taskItem.id)

    this.Tasks[taskIndex].reminder = !this.Tasks[taskIndex].reminder
  }

  deleteTask(taskItem : Task){
    this.Tasks = this.Tasks.filter(task => task.id !== taskItem.id)
  }

  addTask(taskItem : Task){
    
    this.Tasks.push(taskItem)
  }

  onDismiss(){
    
  }

}
