import { Component, Input } from '@angular/core';
import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournament-cards',
  standalone: true,
  imports: [],
  templateUrl: './tournament-cards.component.html',
  styleUrl: './tournament-cards.component.css'
})
export class TournamentCardsComponent {
  @Input() tournament!: Tournament;
}
