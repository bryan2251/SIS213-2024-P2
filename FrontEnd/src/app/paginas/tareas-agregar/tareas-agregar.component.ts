import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { state } from 'src/interface/state';
import { taskPost } from 'src/interface/taskPost';
import { typeTask } from 'src/interface/typeTask';
import { StateService } from 'src/service/state.service';
import { TaskService } from 'src/service/task.service';
import { TypeService } from 'src/service/type.service';

@Component({
  selector: 'app-tareas-agregar',
  templateUrl: './tareas-agregar.component.html',
  styleUrls: ['./tareas-agregar.component.css']
})
export class TareasAgregarComponent implements OnInit {
   taskForm: FormGroup;
   ListarEstado: state[]; // cargar la tabla estado
   ListarTipo: typeTask[]; // cargar la tabla tipo
  constructor(private taskServices:TaskService,
    private stateService: StateService,
    private typeService: TypeService,) {
    this.taskForm = new FormGroup({
      descripcion: new FormControl(''),
      fechainicio: new FormControl(''),
      tiempoinicio: new FormControl(''),
      fechalimite: new FormControl(''),
      tiempolimite: new FormControl (''),
      id_estado: new FormControl(''),
      id_tipo: new FormControl(''),
    });
  }

  ngOnInit() {
    this.stateService.getState().subscribe(respuesta => {
      console.log(respuesta);
      this.ListarEstado = respuesta;
  });

  this.typeService.getType().subscribe(respuesta => {
      console.log(respuesta);
      this.ListarTipo = respuesta;
  });
  }



  crearTarea() {
    if (this.taskForm.valid) {

      const formValues = this.taskForm.value;
      console.log(formValues.id_estado, formValues.id_tipo);
      const task: taskPost = {
        id: 0,
        descripcion: formValues.descripcion,
        inicio: new Date(`${formValues.fechainicio}T${formValues.tiempoinicio}`),
        limite: new Date(`${formValues.fechalimite}T${formValues.tiempolimite}`),
        id_estado: formValues.id_estado,
        id_tipo: formValues.id_tipo
      };
      console.log(task);
      this.taskServices.createTask(task).subscribe(
        response => {
          console.log('Tarea creada con éxito', response);
          // Aquí puedes agregar más lógica para manejar la respuesta del servidor
        },
        error => {
          console.error('Error al crear la tarea', error);
          // Aquí puedes agregar más lógica para manejar los errores
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }

  cancelar() {
    // Lógica para cancelar el formulario
  }
}
