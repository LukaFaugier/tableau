import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  players: string[] = [];
  pools: any[] = [];
  tables: { [key: string]: number[] } = {};

  constructor() {}

  generatePools(players: string[], playersPerPool: number, numberOfPools: number) {
    this.players = players;
    this.pools = [];
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    for (let i = 0; i < numberOfPools; i++) {
      this.pools.push(shuffledPlayers.splice(0, playersPerPool));
    }
    return this.pools;
  }

  assignTables(poolName: string, tableNumbers: number[]) {
    this.tables[poolName] = tableNumbers;
  }

  getPools() {
    return this.pools;
  }

  getTables() {
    return this.tables;
  }
}
