import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirPaginaComponent } from './compartir-pagina.component';

describe('CompartirPaginaComponent', () => {
  let component: CompartirPaginaComponent;
  let fixture: ComponentFixture<CompartirPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompartirPaginaComponent]
    });
    fixture = TestBed.createComponent(CompartirPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
