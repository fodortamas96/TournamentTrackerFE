import { Component } from '@angular/core';
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

  constructor(private tournamentsService: TournamentsService) { }
  
  async showTournaments() {
    (await this.tournamentsService.getTournaments())
      .subscribe(data => this.tournaments = [...data])
  }

  ngOnInit() {
    this.showTournaments();
  }
}