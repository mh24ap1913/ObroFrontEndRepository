import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeuityParComponent } from './beuity-par.component';

describe('BeuityParComponent', () => {
  let component: BeuityParComponent;
  let fixture: ComponentFixture<BeuityParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeuityParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeuityParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
