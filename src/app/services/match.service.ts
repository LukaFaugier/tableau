import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  generateMatchSchedule(pools: any[]) {
    const matches: { player1: any; player2: any; }[] = [];
    pools.forEach(pool => {
      for (let i = 0; i < pool.players.length; i++) {
        for (let j = i + 1; j < pool.players.length; j++) {
          matches.push({
            player1: pool.players[i],
            player2: pool.players[j]
          });
        }
      }
    });
    return matches;
  }
}
