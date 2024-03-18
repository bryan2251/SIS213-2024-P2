import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TareasEnProcesoComponent } from './paginas/tareas-en-proceso/tareas-en-proceso.component';
import { TareasEliminadasComponent } from './paginas/tareas-eliminadas/tareas-eliminadas.component';
import { TareasNoRealizadasComponent } from './paginas/tareas-no-realizadas/tareas-no-realizadas.component';
import { TareasRealizadasComponent } from './paginas/tareas-realizadas/tareas-realizadas.component';
import { TareasPausadasComponent } from './paginas/tareas-pausadas/tareas-pausadas.component';
import { TareasProgramadasComponent } from './paginas/tareas-programadas/tareas-programadas.component';
import { TareasGeneralesComponent } from './paginas/tareas-generales/tareas-generales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { CompartirPaginaComponent } from './paginas/compartir-pagina/compartir-pagina.component';
import { ListaTareasComponent } from './paginas/lista-tareas/lista-tareas.component';
import { TareasAgregarComponent } from './paginas/tareas-agregar/tareas-agregar.component';
import { ChangePaletteService } from 'src/service/changePallete.service';
import { EditarTareaComponent } from './paginas/editar-tarea/editar-tarea.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    BodyComponent,
    TareasEnProcesoComponent,
    TareasEliminadasComponent,
    TareasNoRealizadasComponent,
    TareasRealizadasComponent,
    TareasPausadasComponent,
    TareasProgramadasComponent,
    TareasGeneralesComponent,
    TareasAgregarComponent,
    TareasRealizadasComponent,
    TareasComponent,
    CompartirPaginaComponent,
    ListaTareasComponent,
    EditarTareaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private changePalleteService: ChangePaletteService){
    changePalleteService.cambiarPaleta("paleta1");
  }

 }
