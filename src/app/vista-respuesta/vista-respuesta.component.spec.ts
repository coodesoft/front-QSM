import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRespuestaComponent } from './vista-respuesta.component';

describe('VistaRespuestaComponent', () => {
  let component: VistaRespuestaComponent;
  let fixture: ComponentFixture<VistaRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
