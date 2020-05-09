import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchComponent } from './image-search.component';

describe('ImageSearchComponent', () => {
  let component: ImageSearchComponent;
  let fixture: ComponentFixture<ImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
