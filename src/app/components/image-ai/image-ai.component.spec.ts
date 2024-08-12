import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAIComponent } from './image-ai.component';

describe('ImageAIComponent', () => {
  let component: ImageAIComponent;
  let fixture: ComponentFixture<ImageAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
