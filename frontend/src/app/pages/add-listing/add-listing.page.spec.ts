import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddListingPage } from './add-listing.page';

describe('AddListingPage', () => {
  let component: AddListingPage;
  let fixture: ComponentFixture<AddListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
