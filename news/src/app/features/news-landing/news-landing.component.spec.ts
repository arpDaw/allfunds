import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLandingComponent } from './news-landing.component';

describe('NewsLandingComponent', () => {
  let component: NewsLandingComponent;
  let fixture: ComponentFixture<NewsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
