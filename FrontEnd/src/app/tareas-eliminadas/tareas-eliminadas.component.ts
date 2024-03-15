import { Component,OnInit } from '@angular/core';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-eliminadas',
  templateUrl: './tareas-eliminadas.component.html',
  styleUrls: ['./tareas-eliminadas.component.css']
})
export class TareasEliminadasComponent implements OnInit {
  taskGetLista: taskGet[] = []; // Declare the 'taskGet' property as an array of any type.

  constructor(private taskServices:TaskService) { }

  ngOnInit(): void { 
    this.taskServices.getTasks().subscribe(
      respuesta => {
        this.taskGetLista = respuesta; // No envuelvas 'respuesta' en un array
    
        console.log(this.taskGetLista);
      },
      error => {
        console.error('Hubo un error al obtener las tareas:', error);
      }
    );
  }
}