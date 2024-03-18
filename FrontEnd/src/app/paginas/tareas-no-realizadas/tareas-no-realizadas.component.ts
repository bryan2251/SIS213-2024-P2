import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-no-realizadas',
  templateUrl: './tareas-no-realizadas.component.html',
  styleUrls: ['./tareas-no-realizadas.component.css']
})
export class TareasNoRealizadasComponent implements OnInit{
  taskGetLista: taskGet[] = []; // Declare the 'taskGet' property as an array of any type.

  constructor(private taskServices:TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe(
      respuesta => {
        this.taskGetLista = respuesta;
      },
      error => {
        console.error('Hubo un error al obtener las tareas:', error);
      }
    );
  }
reprogramarTarea(tarea: any) {
  // Lógica para editar la tarea
  this.router.navigate(['/editarTarea', tarea.id]);

}

eliminarTarea(tarea: taskGet) {
  this.taskServices.deleteTask(tarea).subscribe(
    response => {
      this.taskGetLista = this.taskGetLista.filter(t => t.id !== tarea.id);
      console.log('Tarea eliminada:', tarea);
    },
    error => {
      console.error('Hubo un error al eliminar la tarea:', error);
    }
  );
}



}
