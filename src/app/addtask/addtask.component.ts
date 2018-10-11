import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  addTaskForm = new FormGroup({
    taskName: new FormControl(),
    parentTaskName: new FormControl(),
    priority:new FormControl,
    startDate: new FormControl(),
    endDate: new FormControl()
  });
  // taskName = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  newTask = new Task();
  onSubmit(){
    this.newTask.taskDesc = this.addTaskForm.get("taskName").value
    this.newTask.parentTaskDesc = this.addTaskForm.get("parentTaskName").value
    this.newTask.priority = this.addTaskForm.get("priority").value
    this.newTask.startDate = this.addTaskForm.get("startDate").value
    this.newTask.endDate = this.addTaskForm.get("endDate").value
    console.log(this.newTask);
  }

}
