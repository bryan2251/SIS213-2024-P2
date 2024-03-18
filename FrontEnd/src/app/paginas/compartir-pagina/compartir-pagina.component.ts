import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { taskGet } from 'src/interface/taskGet';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-compartir-pagina',
  templateUrl: './compartir-pagina.component.html',
  styleUrls: ['./compartir-pagina.component.css']
})
export class CompartirPaginaComponent {

  taskGetLista: taskGet[] = [];

  constructor(private taskServices:TaskService) { }



  exportarPDF() {
    var doc = new (jsPDF as any)();
    var col = ["ID","Tipo","Descripcion", "Inicio", "Limite", "Estado"];
    var rows: (string | number)[][] = [];


    this.taskServices.getTasks().subscribe(
      (    respuesta: any) => {
        this.taskGetLista = respuesta;

        this.taskGetLista.forEach(task => {
          var temp = [
            task.id,
            task.descripcion,
            new Date(task.inicio).toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' }).replace(',', ''),
            new Date(task.limite).toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' }).replace(',', ''),
            task.tipo_tarea.descripcion,
            task.estado_tarea.descripcion
          ];
          rows.push(temp);
        });
        doc.autoTable(col, rows);
        doc.save('Tareas.pdf');
      },
      error => {
        console.error('Hubo un error al obtener las tareas:', error);
      }
    );

  }
}
