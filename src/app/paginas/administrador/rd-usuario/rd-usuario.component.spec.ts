import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdUsuarioComponent } from './rd-usuario.component';

describe('RdUsuarioComponent', () => {
  let component: RdUsuarioComponent;
  let fixture: ComponentFixture<RdUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
