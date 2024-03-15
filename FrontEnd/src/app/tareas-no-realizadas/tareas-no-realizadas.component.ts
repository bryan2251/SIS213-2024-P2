import { Component , OnInit } from '@angular/core';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-no-realizadas',
  templateUrl: './tareas-no-realizadas.component.html',
  styleUrls: ['./tareas-no-realizadas.component.css']
})
export class TareasNoRealizadasComponent implements OnInit{
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
reprogramarTarea(tarea: any) {
  // Lógica para editar la tarea
  console.log('reprogramar tarea:', tarea);
}

eliminarTarea(tarea: any) {
  // Lógica para eliminar la tarea
  console.log('Eliminar tarea:', tarea);
}



}
