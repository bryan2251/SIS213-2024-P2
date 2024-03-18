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

//completaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar
  editarTarea(tarea: any) {
    console.log('Editar tarea:', tarea);
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
  pausarTarea(tarea: taskGet) {
    tarea.estado_tarea.id = 4;
    this.taskServices.updateTask(tarea).subscribe(
      response => {
        this.taskGetLista = this.taskGetLista.filter(t => t.id !== tarea.id);
        console.log('Tarea pausada:', tarea);
      },
      error => {
        console.error('Hubo un error al pausar la tarea:', error);
      }
    );
    console.log('Pausar tarea:', tarea);
  }

}
