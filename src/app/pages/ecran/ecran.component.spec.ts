import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranComponent } from './ecran.component';

describe('EcranComponent', () => {
  let component: EcranComponent;
  let fixture: ComponentFixture<EcranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
