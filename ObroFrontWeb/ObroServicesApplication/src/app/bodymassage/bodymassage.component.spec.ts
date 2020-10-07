import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymassageComponent } from './bodymassage.component';

describe('BodymassageComponent', () => {
  let component: BodymassageComponent;
  let fixture: ComponentFixture<BodymassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodymassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodymassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
