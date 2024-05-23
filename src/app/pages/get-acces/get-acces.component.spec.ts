import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccesComponent } from './get-acces.component';

describe('GetAccesComponent', () => {
  let component: GetAccesComponent;
  let fixture: ComponentFixture<GetAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAccesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
