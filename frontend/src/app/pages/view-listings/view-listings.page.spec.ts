import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewListingsPage } from './view-listings.page';

describe('ViewListingsPage', () => {
  let component: ViewListingsPage;
  let fixture: ComponentFixture<ViewListingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
