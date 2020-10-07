import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegAndFruitsComponent } from './veg-and-fruits.component';

describe('VegAndFruitsComponent', () => {
  let component: VegAndFruitsComponent;
  let fixture: ComponentFixture<VegAndFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegAndFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegAndFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
