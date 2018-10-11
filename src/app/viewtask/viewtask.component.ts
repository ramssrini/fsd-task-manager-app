import { Component, OnInit } from '@angular/core';
import {TASKS} from'../mockTasks'

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  taskList = TASKS;
  public parentTaskSearchText : string;
  public tasksearchText : string;
  // public customerData : any;
  constructor() { }

  ngOnInit() {

  
  }

}
