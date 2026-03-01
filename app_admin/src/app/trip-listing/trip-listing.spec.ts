import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripListingComponent } from './trip-listing';

describe('TripListingComponent', () => {
  let component: TripListingComponent;
  let fixture: ComponentFixture<TripListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripListingComponent] // standalone component goes here
    }).compileComponents();

    fixture = TestBed.createComponent(TripListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});