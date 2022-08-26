import { ApplicationInitStatus, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import {Actor} from '../Actor';


const httpOptions = {
  headers: new HttpHeaders ({    'Content-Type': 'application/json'  })
}


@Injectable({
  providedIn: 'root'
})


export class ActorService {

  private apiUrl = 'http://localhost:8080/Sakila/All_Actors'

  constructor(private http: HttpClient) { }

  getActors() : Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl);
   }

   deleteTasks(task : Task) : Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(url);
   }

   updateTaskReminder(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions);

   }

   addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
   }
}
