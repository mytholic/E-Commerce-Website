import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingItemsComponent } from './order-tracking-items.component';

describe('OrderTrackingItemsComponent', () => {
  let component: OrderTrackingItemsComponent;
  let fixture: ComponentFixture<OrderTrackingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTrackingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
