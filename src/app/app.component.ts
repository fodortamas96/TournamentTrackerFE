import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TournamentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TournamentTrackerFE';
}
