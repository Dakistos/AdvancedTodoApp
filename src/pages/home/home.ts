import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { TaskProvider } from "../../providers/task/task";
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private taskProvider : TaskProvider) {
  }

  tasks: Task[] = [];

  ngOnInit(){
    this.taskProvider.getTasks().then(
      tasks => {
        if(null !== tasks){
          this.tasks = tasks;
        }
      }
    )
  }

  goToAddTasks(){
    this.navCtrl.push(AddItemPage);
  }

  delete(tasks){
    this.taskProvider.removeTasks(tasks);
  }

}
