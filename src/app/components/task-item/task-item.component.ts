import { Component, OnInit ,Input ,Output, EventEmitter} from '@angular/core';
import {Task} from '../../model/Task';

import { faTimes ,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task 
  @Output() onDeleteClick = new EventEmitter();
  @Output() onDoubleClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClickHandler(taskId? : string){
    this.onDeleteClick.emit(taskId);
  }

  onDoubleClickHandler(taskItem: Task){
    this.onDoubleClick.emit(taskItem);
  }

  onEditClickHandler(taskItem : Task){
    this.onEditClick.emit(taskItem)
  }

}
