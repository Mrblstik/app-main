import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionMediosPagoPage } from './gestion-medios-pago.page';

describe('GestionMediosPagoPage', () => {
  let component: GestionMediosPagoPage;
  let fixture: ComponentFixture<GestionMediosPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMediosPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
