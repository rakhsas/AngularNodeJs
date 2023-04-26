import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateComponentCopy } from './post-create.component-copy';

describe('PostCreateComponentCopy', () => {
  let component: PostCreateComponentCopy;
  let fixture: ComponentFixture<PostCreateComponentCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreateComponentCopy ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreateComponentCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
