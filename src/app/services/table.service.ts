import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  assignTables(matches: any[], tables: number[]) {
    const assignments: { match: any; table: number; }[] = [];
    matches.forEach((match, idx) => {
      const table = tables[idx % tables.length];
      assignments.push({ match, table });
    });
    return assignments;
  }
}
