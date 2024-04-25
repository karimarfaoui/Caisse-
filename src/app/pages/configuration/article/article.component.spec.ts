import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/acces/acces.component.spec.ts
import { AccesComponent } from './acces.component';

describe('AccesComponent', () => {
  let component: AccesComponent;
  let fixture: ComponentFixture<AccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesComponent);
========
import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleComponent);
>>>>>>>> 25e1204b1c890af8be0faabb24cc552143579065:src/app/pages/configuration/article/article.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
