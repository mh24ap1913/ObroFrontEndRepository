import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanAutoComponent } from './urban-auto.component';

describe('UrbanAutoComponent', () => {
  let component: UrbanAutoComponent;
  let fixture: ComponentFixture<UrbanAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
