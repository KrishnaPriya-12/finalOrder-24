import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedVarietiesComponent } from './seed-varieties.component';

describe('SeedVarietiesComponent', () => {
  let component: SeedVarietiesComponent;
  let fixture: ComponentFixture<SeedVarietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedVarietiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedVarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
