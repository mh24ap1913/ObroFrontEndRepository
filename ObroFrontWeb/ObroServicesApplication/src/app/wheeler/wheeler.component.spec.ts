import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelerComponent } from './wheeler.component';

describe('WheelerComponent', () => {
  let component: WheelerComponent;
  let fixture: ComponentFixture<WheelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
