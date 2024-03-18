import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasEliminadasComponent } from './paginas/tareas-eliminadas/tareas-eliminadas.component';
import { TareasEnProcesoComponent } from './paginas/tareas-en-proceso/tareas-en-proceso.component';
import { TareasGeneralesComponent } from './paginas/tareas-generales/tareas-generales.component';
import { TareasNoRealizadasComponent } from './paginas/tareas-no-realizadas/tareas-no-realizadas.component';
import { TareasPausadasComponent } from './paginas/tareas-pausadas/tareas-pausadas.component';
import { TareasProgramadasComponent } from './paginas/tareas-programadas/tareas-programadas.component';
import { TareasRealizadasComponent } from './paginas/tareas-realizadas/tareas-realizadas.component';
import { ListaTareasComponent } from './paginas/lista-tareas/lista-tareas.component';


const routes: Routes = [
  { path: '', component: ListaTareasComponent},
  {path: 'eliminadas', component: TareasEliminadasComponent},
  {path: 'enproceso', component: TareasEnProcesoComponent},
  {path: 'generales', component: TareasGeneralesComponent},
  {path: 'norealizadas', component: TareasNoRealizadasComponent},
  {path: 'realizadas', component: TareasRealizadasComponent},
  {path: 'pausadas', component: TareasPausadasComponent},
  {path: 'programadas', component: TareasProgramadasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
