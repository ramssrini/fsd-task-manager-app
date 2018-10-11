import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { FilterPipe} from './filter.pipe';
import { FilterParentTaskPipe } from './filterParentTask.pipe.';
import { FilterPriorityTaskPipe } from './filterTaskByPriority.pipe';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ViewtaskComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    FilterPipe, 
    FilterParentTaskPipe,
    FilterPriorityTaskPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
