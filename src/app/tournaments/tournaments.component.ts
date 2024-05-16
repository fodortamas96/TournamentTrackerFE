import { Component, inject } from '@angular/core';
import { TournamentCardsComponent } from '../tournament-cards/tournament-cards.component';
import { CommonModule } from '@angular/common';
import { TournamentsService } from '../tournaments.service';
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
  tournaments: Tournament[] = [];
  tournamentsService: TournamentsService = inject(TournamentsService);

  constructor() {
    this.tournaments = this.tournamentsService.getTournaments();
  };
}
