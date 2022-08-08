import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'; 

import { AppComponent } from './app.component';



import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { InputComponent } from './components/input/input.component';
import { NgbModule ,NgbTimepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { MainComponent } from './pages/main/main.component';
import { StoreModule } from '@ngrx/store';

import  { taskReducer } from '../app/state/task.reducer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    InputComponent,
    ModalComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    NgbTimepickerModule,
    NgbModalModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot({
        tasks : taskReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
