import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDividerComponent } from './heading-divider.component';

describe('HeadingDividerComponent', () => {
  let component: HeadingDividerComponent;
  let fixture: ComponentFixture<HeadingDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadingDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
