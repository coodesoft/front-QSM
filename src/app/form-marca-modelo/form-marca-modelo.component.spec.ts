import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarcaModeloComponent } from './form-marca-modelo.component';

describe('FormMarcaModeloComponent', () => {
  let component: FormMarcaModeloComponent;
  let fixture: ComponentFixture<FormMarcaModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMarcaModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarcaModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
