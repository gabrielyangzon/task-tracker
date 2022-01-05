import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-task'
import {Task} from '../../model/Task'
import Swal from 'sweetalert2';

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
   
      Swal.fire({  
        title: 'Are you sure want to remove this task?',  
        text: 'You will not be able to recover this task!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, delete it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
  
          if (result.value) {  
            this.Tasks = this.Tasks.filter(task => task.id !== taskItem.id)

            Swal.fire(  
              'Deleted!',  
              'Task deleted',  
              'success'  
            )  
          } 
      })  

  }

  addTask(taskItem : Task){
    
    this.Tasks.push(taskItem)
  }

  editTask(taskItem: Task){

    let i = this.Tasks.findIndex(tsk => tsk.id === taskItem.id)

    this.Tasks[i] = {...taskItem , text:"test"}
  }

  onDismiss(){
    
  }



}
