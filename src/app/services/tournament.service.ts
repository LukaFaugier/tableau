import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  createPools(numberOfPools: number, playersPerPool: number) {
    const pools = [];
    for (let i = 0; i < numberOfPools; i++) {
      const pool = {
        id: i + 1,
        players: Array.from({ length: playersPerPool }, (_, idx) => `Joueur ${i * playersPerPool + idx + 1}`)
      };
      pools.push(pool);
    }
    return pools;
  }
}
