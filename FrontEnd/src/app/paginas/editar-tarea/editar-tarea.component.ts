import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../../servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router'; // manejo de ruter y activateruter es para capturar datos de una ruta

@Component({
    selector: 'app-editar-tarea',
    templateUrl: './editar-tarea.component.html',
    styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent implements OnInit {
    TID: any; // capturar la ID de la tarewa
    FormularioTarea: FormGroup; // datos que recibe del formulario
    ListarEstado: any; // cargar la tabla estado
    ListarTipo: any; // cargar la tabla tipo
    constructor(
        public formulario: FormBuilder,
        private crudservicio: CrudService, // conectar con el Servicio de Api
        private activarruta: ActivatedRoute,
        private direccionar: Router
    ) {
        this.TID = this.activarruta.snapshot.paramMap.get("id"); // capturamos la id de la ruta
        this.crudservicio.BuscarTarea(this.TID).subscribe(respuesta => {
            console.log(respuesta); // para llamar los datos del json
            this.FormularioTarea.setValue({
                descripcion: respuesta[0]['descripcion'], // captura un solo valor
                fechainicio: respuesta[0]['fechainicio'],
                tiempoinicio: respuesta[0]['tiempoinicio'],
                fechalimite: respuesta[0]['fechalimite'],
                tiempolimite: respuesta[0]['tiempolimite'],
                id_estado: respuesta[0]['id_estado'],
                id_tipo: respuesta[0]['id_tipo']
            });
        }); // para que guarde los datos en el bs

        this.FormularioTarea = this.formulario.group({
            descripcion: [''],
            fechainicio: [''],
            tiempoinicio: [''],
            fechalimite: [''],
            tiempolimite: [''],
            id_estado: [''],
            id_tipo: ['']
        });
    }
    ngOnInit(): void {
        this.crudservicio.ListarEstado().subscribe(respuesta => {
            console.log(respuesta); // para llamar los datos del json
            this.ListarEstado = respuesta;
        }); // para que guarde los datos en el bs

        this.crudservicio.ListarTipo().subscribe(respuesta => {
            console.log(respuesta); // para llamar los datos del json
            this.ListarTipo = respuesta;
        }); // para que guarde los datos en el bs
    }

    EnviarDatos(): any {
        console.log('Me presionaste');
        console.log(this.TID);
        console.log(this.FormularioTarea.value);
        this.crudservicio.ActualizarTarea(this.TID, this.FormularioTarea.value).subscribe(respuesta => {
            this.direccionar.navigateByUrl('/listar-tarea');
        }); // para que guarde los datos en el bs

    }
}
