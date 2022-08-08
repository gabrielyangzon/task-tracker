import { Component, OnChanges  , Input, Output ,EventEmitter } from '@angular/core';

import { Task } from '../../model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnChanges  {

  @Input() data : Task[];

  @Output() addT = new EventEmitter()
  @Output() toggleT = new EventEmitter()
  @Output() deleteT = new EventEmitter()
  @Output() editT = new EventEmitter()

  constructor() { }

  ngOnChanges(): void {

  }


  toggleTask(taskItem : Task){
    this.toggleT.emit(taskItem)
  }

   deleteTask(taskId? : string){
    this.deleteT.emit(taskId)
   }

   addTask(taskItem : Task){ 
      this.addT.emit(taskItem)
  }

  editTask(taskItem : Task){
     this.editT.emit(taskItem)
  }

  onDismiss(){

  }




}
