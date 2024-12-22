import { Component } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css']
})
export class TableManagementComponent {
  tables = [14, 15, 16, 17, 18, 19, 20]; // Liste des tables
  tableAssignments: any[] = [];

  constructor(private tableService: TableService) {}

  assignTables(matches: any[]) {
    this.tableAssignments = this.tableService.assignTables(matches, this.tables);
  }
}
