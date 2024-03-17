
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { taskGet } from 'src/interface/taskGet';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(private http: HttpClient) { }
  getTasks(): Observable<taskGet[]> {
    return this.http.get<taskGet[]>('http://localhost:3000/tasks/getAll');
  }
  deleteTask(task:taskGet): Observable<any> {
    return this.http.delete('http://localhost:3000/tasks/deleteById/'+task.id);
  }
  createTask(task:taskGet): Observable<any> {
    return this.http.post('http://localhost:3000/tasks/create',task);
  }
  updateTask(task:taskGet,id :String): Observable<any> {
    return this.http.put('http://localhost:3000/tasks/updateById/${id}',task,);
  }
  getTaskById(id :String): Observable<taskGet> {
    return this.http.get<taskGet>('http://localhost:3000/tasks/getById/${id}');
  }
    
}
