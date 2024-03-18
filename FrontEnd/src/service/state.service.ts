
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { state } from 'src/interface/state';
import { taskGet } from 'src/interface/taskGet';
@Injectable({
  providedIn: 'root'
})

export class StateService {
  constructor(private http: HttpClient) { }
  getState(): Observable<state[]> {

    return this.http.get<state[]>('http://localhost:3000/state-task/getAll');

  }
  deleteState(task:state): Observable<any> {
    return this.http.delete('http://localhost:3000/state-task/deleteById/'+task.id);
  }
  createState(task:state): Observable<any> {
    return this.http.post('http://localhost:3000/state-task/create',task);
  }
  updateState(task:state,id :String): Observable<any> {
    return this.http.put('http://localhost:3000/state-task/updateById/${id}',task,);
  }
  getStateById(id :String): Observable<state> {
    return this.http.get<taskGet>(`http://localhost:3000/state-task/getById/${id}`);
  }

}
