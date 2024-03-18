
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { state } from 'src/interface/state';
import { taskGet } from 'src/interface/taskGet';
import { typeTask } from 'src/interface/typeTask';
@Injectable({
  providedIn: 'root'
})

export class TypeService {
  constructor(private http: HttpClient) { }
  getType(): Observable<typeTask[]> {

    return this.http.get<typeTask[]>('http://localhost:3000/type-task/getAll');

  }
  deleteType(task:typeTask): Observable<any> {
    return this.http.delete('http://localhost:3000/type-task/deleteById/'+task.id);
  }
  createType(task:typeTask): Observable<any> {
    return this.http.post('http://localhost:3000/type-task/create',task);
  }
  updateType(task:typeTask,id :String): Observable<any> {
    return this.http.put('http://localhost:3000/type-task/updateById/${id}',task,);
  }
  getTypeById(id :String): Observable<typeTask> {
    return this.http.get<typeTask>(`http://localhost:3000/type-task/getById/${id}`);
  }

}
