import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaintingComponent } from './home-painting.component';

describe('HomePaintingComponent', () => {
  let component: HomePaintingComponent;
  let fixture: ComponentFixture<HomePaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
