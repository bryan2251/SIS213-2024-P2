import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGeneralesComponent } from './tareas-generales.component';

describe('TareasGeneralesComponent', () => {
  let component: TareasGeneralesComponent;
  let fixture: ComponentFixture<TareasGeneralesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasGeneralesComponent]
    });
    fixture = TestBed.createComponent(TareasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
