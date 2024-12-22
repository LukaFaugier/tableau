import { Component } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-generation',
  templateUrl: './tournament-generation.component.html',
  styleUrls: ['./tournament-generation.component.css']
})
export class TournamentGenerationComponent {
  players: string[] = [];
  playersPerPool: number = 4;
  numberOfPools: number = 4;
  generatedPools: any[] = [];

  constructor(private tournamentService: TournamentService) {}

  generateTournament() {
    this.generatedPools = this.tournamentService.generatePools(
      this.players,
      this.playersPerPool,
      this.numberOfPools
    );
  }

  addPlayer(playerName: string) {
    if (playerName) {
      this.players.push(playerName);
    }
  }

  resetTournament() {
    this.players = [];
    this.generatedPools = [];
  }
}
