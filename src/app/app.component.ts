import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    TournamentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TournamentTrackerFE';
}
