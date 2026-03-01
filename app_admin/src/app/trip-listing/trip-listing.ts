import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TripDataService } from '../services/trip-data';
import { Trip } from '../models/trip';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  submitted = false;
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value ?? [];
        this.message = this.trips.length
          ? `There are ${this.trips.length} trips available.`
          : 'There were no trips retrieved from the database';
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Trip API error:', error);
        this.message = 'Error retrieving trips (see console)';
      }
    });
  }

  addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}