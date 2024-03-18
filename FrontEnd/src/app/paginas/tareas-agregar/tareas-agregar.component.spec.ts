import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasAgregarComponent } from './tareas-agregar.component';

describe('TareasAgregarComponent', () => {
  let component: TareasAgregarComponent;
  let fixture: ComponentFixture<TareasAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasAgregarComponent]
    });
    fixture = TestBed.createComponent(TareasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
