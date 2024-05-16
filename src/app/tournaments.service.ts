import { Injectable } from '@angular/core';
import { Tournament } from './tournament';

@Injectable({
  providedIn: 'root'
})

export class TournamentsService {
  tournaments: Tournament[] = [
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    },
    {
      eventType: 'ATP',
      category: 1000,
      city: 'Madrid',
      country: 'Spain',
      surface: 'Clay',
      name: 'Mutua Madrid Open'
    }
  ];

  constructor() { }

  getTournaments(): Tournament[] {
    return this.tournaments;
  }
}
