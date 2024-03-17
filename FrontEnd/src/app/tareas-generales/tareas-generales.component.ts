import { Component } from '@angular/core';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-generales',
  templateUrl: './tareas-generales.component.html',
  styleUrls: ['./tareas-generales.component.css']
})
export class TareasGeneralesComponent {
  taskGetLista: taskGet[] = []; // Declare the 'taskGet' property as an array of any type.

  constructor(private taskServices:TaskService) { }

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
  editarTarea(tarea: any) {
    // Lógica para editar la tarea
    console.log('Editar tarea:', tarea);
  }
  finalizarTarea(tarea: taskGet) {
    tarea.estado_tarea.id = 3;
    this.taskServices.updateTask(tarea).subscribe(
      response => {
        this.taskGetLista = this.taskGetLista.filter(t => t.id !== tarea.id);
        console.log('Tarea finalizada:', tarea);
      },
      error => {
        console.error('Hubo un error al finalizar la tarea:', error);
      }
    );
    console.log('Finalizar tarea:', tarea);
  }
  eliminarTarea(tarea: taskGet) {
    this.taskServices.deleteTask(tarea).subscribe(
      response => {
        // Elimina la tarea de taskGetLista
        this.taskGetLista = this.taskGetLista.filter(t => t.id !== tarea.id);
        console.log('Tarea eliminada:', tarea);
      },
      error => {
        console.error('Hubo un error al eliminar la tarea:', error);
      }
    );
  }
}