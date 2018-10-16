import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from "../../models/task";
import { TaskProvider } from "../../providers/task/task";
import { Storage } from "@ionic/Storage";
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskProvider : TaskProvider) {
  }

  ngOnInit(){
    this.taskProvider.getTasks().then(
      tasks => {
        if(null !== tasks){
          this.tasks = tasks;
        }
      }
    )
  }

  //Création d'une tâche
  task: Task = new Task();

  tasks: Task[] = [];
  active: boolean = true;

  saveTask(): void{
      if(this.task.title !== undefined ){
          this.task.id = Date.now();
          this.tasks.push(this.task);
          this.taskProvider.saveTasks(this.tasks);
          this.navCtrl.setRoot(HomePage);

          //reset formulaire
          this.task = new Task();
          this.active = false;
          setTimeout(() => this.active = true, 0);
      }
  }

  enterSave(keyCode: number): void{
      if(keyCode === 13){
          this.saveTask();
      }
  }

  saveOurTasks(){
    this.taskProvider.saveTasks(this.tasks);
  }

}
