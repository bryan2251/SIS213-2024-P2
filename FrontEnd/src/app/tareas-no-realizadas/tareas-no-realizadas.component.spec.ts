import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasNoRealizadasComponent } from './tareas-no-realizadas.component';

describe('TareasNoRealizadasComponent', () => {
  let component: TareasNoRealizadasComponent;
  let fixture: ComponentFixture<TareasNoRealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasNoRealizadasComponent]
    });
    fixture = TestBed.createComponent(TareasNoRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
