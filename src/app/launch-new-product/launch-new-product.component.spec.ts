import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNewProductComponent } from './launch-new-product.component';

describe('LaunchNewProductComponent', () => {
  let component: LaunchNewProductComponent;
  let fixture: ComponentFixture<LaunchNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchNewProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
