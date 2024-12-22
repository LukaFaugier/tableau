import { Component } from '@angular/core';
// @ts-ignore
import { TournamentService } from '../../services/tournament.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent {
  tournamentName: string = '';
  numberOfPools: number = 1;
  playersPerPool: number = 4;
  pools: any[] = [];

  constructor(private tournamentService: TournamentService) {}

  generateTournament() {
    this.pools = this.tournamentService.createPools(this.numberOfPools, this.playersPerPool);
  }
}
