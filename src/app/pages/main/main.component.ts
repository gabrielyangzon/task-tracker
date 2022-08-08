import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import {TASKS} from '../../mock-task'

import {Task} from '../../model/Task'

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';


interface AppState {
  tasks :Task[]
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {

  Tasks : Task[]



  constructor(
    private taskService : TaskService,
    private store : Store<AppState>) { }

  ngOnInit(): void {

      //this.store.select("tasks").subscribe(c => this.Tasks = c)

      
      this.taskService.getAllTask().subscribe(res => {
         this.Tasks = res
      })
      
  }

  toggleTask(taskItem : Task){

    this.taskService.toggleTask(taskItem).subscribe(c => {
      this.ngOnInit()    
    })

  }

  deleteTask(taskItemId : string){
   
      Swal.fire({  
        title: 'Are you sure want to remove this task?',  
        text: 'You will not be able to recover this task!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, delete it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
  
          if (result.value) {  
          

            this.taskService.deleteTask(taskItemId).subscribe(a => {

                this.ngOnInit();
            })

            Swal.fire(  
              'Deleted!',  
              'Task deleted',  
              'success'  
            )  
          } 
      })  

  }

  addTask(taskItem : Task){

    this.taskService.addTask(taskItem)

    this.ngOnInit()
   

  }

  editTask(taskItem: Task){

    // let i = this.Tasks.findIndex(tsk => tsk.id === taskItem.id)
    // this.Tasks[i] = {...taskItem , text:"test"}

  }

  onDismiss(){
    
  }

}
