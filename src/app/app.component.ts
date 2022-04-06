import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  taskList: any [] = [];

  addNewTask(task: string) {
    this.taskList.push({id:this.taskList.length, name:task});
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);//remove the task associated with id provided (the current task)
  }
}
