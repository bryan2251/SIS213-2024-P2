import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { TareasRealizadasComponent } from './paginas/tareas-realizadas/tareas-realizadas.component';
import { TareasEnProcesoComponent } from './paginas/tareas-en-proceso/tareas-en-proceso.component';
import { TareasEliminadasComponent } from './paginas/tareas-eliminadas/tareas-eliminadas.component';
import { ListaTareasComponent } from './paginas/lista-tareas/lista-tareas.component';

const routes: Routes = [
  { path: '', component: ListaTareasComponent},
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas-completadas', component: TareasRealizadasComponent},
  { path: 'tareas-en-proceso', component: TareasEnProcesoComponent},
  { path: 'tareas-eliminadas',component:TareasEliminadasComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
