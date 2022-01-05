import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string = 'Task Tracker';
  showTask : boolean = false;
  subscription : Subscription;

  text : string = "+";

  constructor(private uiService : UiService) {
      this.subscription = uiService.
                            onToggle().
                            subscribe(value => this.showTask = value )
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.text = this.showTask ? "+" : "Hide"
    this.uiService.toggleAddTask()
  }
}
