import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // manejo de ruter y activateruter es para capturar datos de una ruta
import { state } from 'src/interface/state';
import { taskGet } from 'src/interface/taskGet';
import { taskPost } from 'src/interface/taskPost';
import { typeTask } from 'src/interface/typeTask';
import { StateService } from 'src/service/state.service';
import { TaskService } from 'src/service/task.service';
import { TypeService } from 'src/service/type.service';

@Component({
    selector: 'app-editar-tarea',
    templateUrl: './editar-tarea.component.html',
    styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
    TID: number; // capturar la ID de la tarewa
    taskForm: FormGroup; // datos que recibe del formulario
    ListarEstado: state[]; // cargar la tabla estado
    ListarTipo: typeTask[]; // cargar la tabla tipo

    constructor(
        private taskService: TaskService,
        private typeService: TypeService,
        private stateService: StateService, // conectar con el Servicio de Api
        private route: ActivatedRoute,
        private direccionar: Router
    ) {

    }
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.route.paramMap.subscribe(params => {
          let id = params.get('id');
          if (id) { // Asegúrate de que 'id' existe
            this.TID = parseInt(id);
            this.taskService.getTaskById(id).subscribe(respuesta => {
              console.log(respuesta); // para llamar los datos del json


          let fechaInicio = new Date(respuesta['inicio']);
          let fechaLimite = new Date(respuesta['limite']);

          let fechainicio = fechaInicio.toISOString().split('T')[0]; // YYYY-MM-DD
          let tiempoinicio = fechaInicio.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

          let fechalimite = fechaLimite.toISOString().split('T')[0]; // YYYY-MM-DD
          let tiempolimite = fechaLimite.toTimeString().split(' ')[0].substring(0, 5); // HH:MM


          this.taskForm.setValue({
              descripcion: respuesta['descripcion'], // captura un solo valor
              fechainicio: fechainicio,
              tiempoinicio: tiempoinicio,
              fechalimite: fechalimite,
              tiempolimite: tiempolimite,
              id_estado: respuesta['estado_tarea'].id,
              id_tipo: respuesta['tipo_tarea'].id,
          });
            });
          } else {
            console.error('ID no encontrado');
          }
        });

      this.taskForm = new FormGroup({
        descripcion: new FormControl(''),
        fechainicio: new FormControl(''),
        tiempoinicio: new FormControl(''),
        fechalimite: new FormControl(''),
        tiempolimite: new FormControl (''),
        id_estado: new FormControl(''),
        id_tipo: new FormControl(''),
      });
      });
        this.stateService.getState().subscribe(respuesta => {
            console.log(respuesta); // para llamar los datos del json
            this.ListarEstado = respuesta;
        }); // para que guarde los datos en el bs

        this.typeService.getType().subscribe(respuesta => {
            console.log(respuesta); // para llamar los datos del json
            this.ListarTipo = respuesta;
        }); // para que guarde los datos en el bs
    }

    CrearTarea(): any {
      if(this.taskForm){
        const formValues = this.taskForm.value;
        console.log(formValues.id_estado, formValues.id_tipo);
        const task: taskGet = {
          id: this.TID,
          descripcion: formValues.descripcion,
          inicio: new Date(`${formValues.fechainicio}T${formValues.tiempoinicio}`),
          limite: new Date(`${formValues.fechalimite}T${formValues.tiempolimite}`),
          estado_tarea: {
            id: formValues.id_estado,
            descripcion: ''
          },
          tipo_tarea: {
            id: formValues.id_tipo,
            descripcion: ''
          }
        };
        console.log('Me presionaste');
        console.log(this.TID);
        console.log(this.taskForm.value);
        console.log(task);
        console.log(formValues.id_estado, formValues.id_tipo);
        this.taskService.updateTask(task).subscribe(respuesta => {
            this.direccionar.navigateByUrl('');
            console.log(respuesta);
        }); // para que guarde los datos en el bs

      }
    }
}
