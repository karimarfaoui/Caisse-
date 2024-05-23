import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBonComponent } from './get-bon.component';

describe('GetBonComponent', () => {
  let component: GetBonComponent;
  let fixture: ComponentFixture<GetBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
