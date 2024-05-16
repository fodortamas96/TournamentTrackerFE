import { Injectable } from '@angular/core';
import { Tournament } from './tournament';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TournamentsService {
  serverUrl = 'http://localhost:3000/tournaments';
  constructor(private httpClient: HttpClient) {

  }

  async getTournaments() {
    return this.httpClient.get<Tournament[]>(this.serverUrl, {observe: 'body', responseType: 'json'});
  }
}
