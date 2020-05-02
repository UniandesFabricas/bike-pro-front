import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroPublicacionesComponent } from './muroPublicaciones.component';

describe('MuroPublicacionesComponent', () => {
  let component: MuroPublicacionesComponent;
  let fixture: ComponentFixture<MuroPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
