import { Component } from '@angular/core';
import { TournamentCardsComponent } from '../tournament-cards/tournament-cards.component';
import { CommonModule } from '@angular/common';
import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [
    CommonModule,
    TournamentCardsComponent
  ],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
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
}
