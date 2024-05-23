import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBonsortieComponent } from './get-bonsortie.component';

describe('GetBonsortieComponent', () => {
  let component: GetBonsortieComponent;
  let fixture: ComponentFixture<GetBonsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBonsortieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBonsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
