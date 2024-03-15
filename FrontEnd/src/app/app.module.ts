import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasEnProcesoComponent } from './tareas-en-proceso/tareas-en-proceso.component';
import { TareasEliminadasComponent } from './tareas-eliminadas/tareas-eliminadas.component';
import { TareasNoRealizadasComponent } from './tareas-no-realizadas/tareas-no-realizadas.component';
import { TareasPausadasComponent } from './tareas-pausadas/tareas-pausadas.component';
import { TareasProgramadasComponent } from './tareas-programadas/tareas-programadas.component';
import { TareasGeneralesComponent } from './tareas-generales/tareas-generales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import  { BodyComponent } from './body/body.component';
import { TareasComponent } from './paginas/tareas/tareas.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    BodyComponent,
    TareasComponent,
    TareasEnProcesoComponent,
    TareasEliminadasComponent,
    TareasNoRealizadasComponent,
    TareasPausadasComponent,
    TareasProgramadasComponent,
    TareasGeneralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }