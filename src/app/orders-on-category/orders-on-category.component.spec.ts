import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOnCategoryComponent } from './orders-on-category.component';

describe('OrdersOnCategoryComponent', () => {
  let component: OrdersOnCategoryComponent;
  let fixture: ComponentFixture<OrdersOnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersOnCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersOnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
