import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletArticleComponent } from './delet-article.component';

describe('DeletArticleComponent', () => {
  let component: DeletArticleComponent;
  let fixture: ComponentFixture<DeletArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
