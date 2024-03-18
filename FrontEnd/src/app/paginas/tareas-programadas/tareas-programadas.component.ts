import { Component, OnInit} from '@angular/core';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-programadas',
  templateUrl: './tareas-programadas.component.html',
  styleUrls: ['./tareas-programadas.component.css']
})
export class TareasProgramadasComponent implements OnInit  {
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
editarTarea(tarea: taskGet) {
  // Lógica para editar la tarea
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

}
