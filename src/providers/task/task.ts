import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Task} from "../../models/task";
import {Storage} from '@ionic/storage';


@Injectable()
export class TaskProvider {

    constructor(public http: HttpClient, public  storage: Storage) {
        console.log('Hello TaskProvider Provider');
    }

    //Sauvegarder les taches
    saveTasks(tasks: Task[]) {
        this.storage.set('tasks', tasks);
    }

    //Récuperer les taches sauvegardées
    getTasks(): Promise<Task[]> {
        return this.storage.get('tasks');
    }

    removeTasks(tasks) {
        this.storage.remove('tasks');
    }

}
