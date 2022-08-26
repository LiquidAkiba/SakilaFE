import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Task} from '../Task'
import { Actor } from '../Actors';

const httpOptions = {
  headers: new HttpHeaders ({    'Content-Type': 'application/json'  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private apiUrl = 'http://localhost:8080/Sakila/'
  private apiUrl = 'http://localhost:5000/Tasks'

  constructor(private http: HttpClient) { }

  getActors() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
   }

   deleteTasks(task : Task) : Observable<Task> {
      const url = `${this.apiUrl}/ ${task.id}`;
      return this.http.delete<Task>(url);
   }

   deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/Delete_Actor_By_Id?actorId=${task.id}`;
    return this.http.delete<Task>(url);
  }

  deleteActor(actor:Actor) : Observable<Actor> {
    const url = `${this.apiUrl}/${actor.id}`;
    return this.http.delete<Task>(url);
  }

  

  addActor(actor: Actor): Observable<Actor> {
    
    //const addUrl =  `http://localhost:8080/Sakila/Add_New_Actor?firstName=${actor.firstName}&lastName=${actor.lastName}`

    return this.http.post<Task>(this.apiUrl, actor, httpOptions);
    
  }

  updateActor(firstName: string, lastName: string, id:string) {
    const updateUrl = `${this.apiUrl}/Edit_Actor_By_Id?actorId=${id}`;
    return this.http.patch<Task>(updateUrl, {firstName, lastName, id})
  }
}
