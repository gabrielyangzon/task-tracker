import { Component, OnInit ,Input , Output , EventEmitter } from '@angular/core';
import { NgbDateStruct ,NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Task} from '../../model/Task'

import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  time:NgbTimeStruct;
  modelDate : NgbDateStruct;
  meridian:boolean = true;
  text : string;
  reminder:boolean
  showAddTask:boolean;
  subscription :Subscription;

  
  @Output() onAddTask = new EventEmitter()

  constructor(private uiService : UiService) { 
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value )
  }

  ngOnInit(): void {

  }

  onSubmit(){


    const m = this.time.hour < 13 ? "am" : "pm"
    const t = this.time.minute > 10 ? "" : "0"

    const newTask : Task = {
        text : this.text,
        reminder : this.reminder,
        day : `${this.modelDate.year}-${this.modelDate.month}-${this.modelDate.day}  at ${this.time.hour}:${t}${this.time.minute}${m}`
    }

   console.log(newTask)

   this.text = ""
   this.reminder = false;
  //  this.modelDate
  //  this.time

    this.onAddTask.emit(newTask)
  }

  


}
