import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  key :string = "taskss"

  constructor() {

   }



  getAllTask(): Observable<Task[]> {

    let allTask =  this.getSessionItems()
   
    if(allTask != null){
        return of(JSON.parse(allTask));
    }
  
    return of();
   
  }

  addTask(newTask: Task): void {
 
    
     let currentTasks = this.getSessionItems()
     let arrCurrentTasks = []

     
         if(currentTasks !== null && currentTasks !== "null" ){
          
          
          arrCurrentTasks = JSON.parse(currentTasks)
          arrCurrentTasks.push({ ...newTask})

          }
         else{
            arrCurrentTasks = [{ ...newTask }]
            console.log("2")
          }

    sessionStorage.setItem("taskss", JSON.stringify(arrCurrentTasks))
  }


  toggleTask(taskItem : Task) : Observable<boolean>{

     let currentTasks = this.getSessionItems()
     let arrCurrentTasks = []
      if(currentTasks !== null && currentTasks !== "null" ){
          
          
          arrCurrentTasks  = JSON.parse(currentTasks)

          const taskIndex = arrCurrentTasks.findIndex((c : Task)=> c.id === taskItem.id)

          arrCurrentTasks[taskIndex].reminder = !arrCurrentTasks[taskIndex].reminder

          console.log(arrCurrentTasks)
      
         sessionStorage.setItem("taskss", JSON.stringify(arrCurrentTasks))
          return of(true)
      }

      return of(false)

     
  }

  deleteTask(taskId : string ) : Observable<boolean> {

     let currentTasks = this.getSessionItems()
     let arrCurrentTasks = []
      if(currentTasks !== null && currentTasks !== "null" ){
          
          
         arrCurrentTasks  = JSON.parse(currentTasks)

         const filteredTask = arrCurrentTasks.filter((c : Task)=> c.id !== taskId)
      
         sessionStorage.setItem("taskss", JSON.stringify(filteredTask))
          return of(true)
      }

    return of(false)
  }


  private getSessionItems() : any{
     return sessionStorage.getItem(this.key)
  }

}
