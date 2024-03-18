
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { taskGet } from 'src/interface/taskGet';
import { taskPost } from 'src/interface/taskPost';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  updateTaskPost(task: taskPost) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  getTasks(): Observable<taskGet[]> {
    return this.http.get<taskGet[]>('http://localhost:3000/tasks/getAll');
  }
  deleteTask(task:taskGet): Observable<any> {
    return this.http.delete('http://localhost:3000/tasks/deleteById/'+task.id);
  }
  createTask(task:taskPost): Observable<any> {
    return this.http.post('http://localhost:3000/tasks/create',task);
  }
  updateTask(task:taskGet): Observable<any> {
    return this.http.patch('http://localhost:3000/tasks/updateById/'+task.id,task);
}

updateTaskForm(task:taskPost): Observable<any> {
  return this.http.patch('http://localhost:3000/tasks/updateById/'+task.id,task);
}
getTaskById(id :String): Observable<taskGet> {
  return this.http.get<taskGet>(`http://localhost:3000/tasks/getById/${id}`);
}


}
