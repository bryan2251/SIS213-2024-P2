import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPausadasComponent } from './tareas-pausadas.component';

describe('TareasPausadasComponent', () => {
  let component: TareasPausadasComponent;
  let fixture: ComponentFixture<TareasPausadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasPausadasComponent]
    });
    fixture = TestBed.createComponent(TareasPausadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
