import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationStockComponent } from './consultation-stock.component';

describe('ConsultationStockComponent', () => {
  let component: ConsultationStockComponent;
  let fixture: ComponentFixture<ConsultationStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationStockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultationStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
