import { Component, OnInit ,Input ,Output, EventEmitter} from '@angular/core';
import {Task} from '../../model/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task 
  @Output() onDeleteClick = new EventEmitter();
  @Output() onDoubleClick = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClickHandler(taskItem:Task){
    this.onDeleteClick.emit(taskItem);
  }

  onDoubleClickHandler(taskItem: Task){
    this.onDoubleClick.emit(taskItem);
  }

}
