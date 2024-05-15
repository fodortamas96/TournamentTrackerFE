import { Component } from '@angular/core';
import { TournamentCardsComponent } from '../tournament-cards/tournament-cards.component';
import { CommonModule } from '@angular/common';

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
  
}
