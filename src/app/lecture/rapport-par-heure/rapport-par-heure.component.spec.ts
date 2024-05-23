import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportParHeureComponent } from './rapport-par-heure.component';

describe('RapportParHeureComponent', () => {
  let component: RapportParHeureComponent;
  let fixture: ComponentFixture<RapportParHeureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportParHeureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RapportParHeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
