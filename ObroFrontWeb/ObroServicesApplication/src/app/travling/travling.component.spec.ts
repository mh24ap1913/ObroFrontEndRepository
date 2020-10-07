import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravlingComponent } from './travling.component';

describe('TravlingComponent', () => {
  let component: TravlingComponent;
  let fixture: ComponentFixture<TravlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
