import { Component, OnInit } from '@angular/core';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-en-proceso',
  templateUrl: './tareas-en-proceso.component.html',
  styleUrls: ['./tareas-en-proceso.component.css']
})
export class TareasEnProcesoComponent implements OnInit {
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

  eliminarTarea(tarea: any) {
    // Lógica para eliminar la tarea
    console.log('Eliminar tarea:', tarea);
  }
  finalizarTarea(tarea: any) {
    // Lógica para finalizar la tarea
    console.log('Finalizar tarea:', tarea);
  }
  pausarTarea(tarea: any) {
    // Lógica para pausar la tarea
    console.log('Pausar tarea:', tarea);
  }

}
