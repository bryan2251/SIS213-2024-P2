import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasEliminadasComponent } from './tareas-eliminadas.component';

describe('TareasEliminadasComponent', () => {
  let component: TareasEliminadasComponent;
  let fixture: ComponentFixture<TareasEliminadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasEliminadasComponent]
    });
    fixture = TestBed.createComponent(TareasEliminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
