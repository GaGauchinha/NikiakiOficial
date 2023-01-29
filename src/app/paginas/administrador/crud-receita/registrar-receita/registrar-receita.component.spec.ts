import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReceitaComponent } from './registrar-receita.component';

describe('RegistrarReceitaComponent', () => {
  let component: RegistrarReceitaComponent;
  let fixture: ComponentFixture<RegistrarReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
