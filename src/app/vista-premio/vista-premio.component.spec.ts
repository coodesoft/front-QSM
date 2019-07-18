import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPremioComponent } from './vista-premio.component';

describe('VistaPremioComponent', () => {
  let component: VistaPremioComponent;
  let fixture: ComponentFixture<VistaPremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
