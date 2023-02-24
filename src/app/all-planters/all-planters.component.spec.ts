import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlantersComponent } from './all-planters.component';

describe('AllPlantersComponent', () => {
  let component: AllPlantersComponent;
  let fixture: ComponentFixture<AllPlantersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlantersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlantersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
