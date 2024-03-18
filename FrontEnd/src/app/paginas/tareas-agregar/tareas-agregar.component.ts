import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-tareas-agregar',
  templateUrl: './tareas-agregar.component.html',
  styleUrls: ['./tareas-agregar.component.css']
})
export class TareasAgregarComponent implements OnInit {
   taskForm: FormGroup;

  constructor(private taskServices:TaskService) {
    this.taskForm = new FormGroup({
      descripcion: new FormControl(''),
      inicio: new FormControl(''),
      limite: new FormControl(''),
      estado_tarea: new FormControl(''),
      tipo_tarea: new FormControl(''),
    });
  }  


  
  ngOnInit() {
  }
  
  crearTarea() {
    // Lógica para enviar el formulario
  }

  cancelar() {
    // Lógica para cancelar el formulario
  }
}
