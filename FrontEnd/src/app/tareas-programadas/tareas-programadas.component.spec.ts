import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasProgramadasComponent } from './tareas-programadas.component';

describe('TareasProgramadasComponent', () => {
  let component: TareasProgramadasComponent;
  let fixture: ComponentFixture<TareasProgramadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasProgramadasComponent]
    });
    fixture = TestBed.createComponent(TareasProgramadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
