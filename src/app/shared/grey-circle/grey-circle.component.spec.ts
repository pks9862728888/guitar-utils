import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyCircleComponent } from './grey-circle.component';

describe('GreyCircleComponent', () => {
  let component: GreyCircleComponent;
  let fixture: ComponentFixture<GreyCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreyCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
