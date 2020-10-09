import { Component, OnInit } from '@angular/core';
import { ColumnConfiguration, TableConfiguration } from 'ngx-ck-grid';

@Component({
  selector: 'app-flat-grid',
  templateUrl: './flat-grid.component.html',
  styleUrls: ['./flat-grid.component.css'],
})
export class FlatGridComponent implements OnInit {
  tableOptions: TableConfiguration;
  tableIcons: any = {};

  ngOnInit() {
    this.tableOptions = new TableConfiguration();
    this.addSampleRows(100);
  }
  addSampleRows(rows: number): any {
    const gridData: any[] = [];
    let gridColumns: ColumnConfiguration[] = [];
    gridColumns = [
      {
        name: 'Id',
        id: 'id',
        visible: true,
      },
      {
        name: 'Column One',
        id: 'columnone',
        visible: true,
      },
      {
        name: 'Column Two',
        id: 'columntwo',
        visible: true,
      },
      {
        name: 'Column Three',
        id: 'columnthree',
        visible: true,
      },
      {
        name: 'Column Four',
        id: 'columnfour',
        visible: true,
      },
      {
        name: 'Column Five',
        id: 'columnfive',
        visible: true,
      },
      {
        name: 'Column Six',
        id: 'columnsix',
        visible: true,
      },
      {
        name: 'Column Seven',
        id: 'columnseven',
        visible: true,
      },
      {
        name: 'Column Eight',
        id: 'columneight',
        visible: true,
      },
      {
        name: 'Column Nine',
        id: 'columnnine',
        visible: true,
      },
      {
        name: 'Column Ten',
        id: 'columnten',
        visible: true,
      },
    ];
    for (let i = 0; i < rows; i++) {
      gridData.push({
        id: i,
        columnone: 'Column One',
        columntwo: 'Column Two',
        columnthree: 'Column Three Data',
        columnfour: 'Column Four',
        columnfive: 'Column Five Data',
        columnsix: 'Column Six Data',
        columnseven: 'Column Seven Data',
        columneight: 'Column Eight Data',
        columnnine: 'Column Nine Data',
        columnten: 'Column Ten Data',
      });
    }
    this.initTableOptions(gridData, gridColumns);
  }
  initTableOptions(data, columns) {
    this.tableOptions.enableRowSelection = true;
    this.tableOptions.rowSelection = 'single';
    this.tableOptions.icons = this.tableIcons;
    this.tableOptions.id = 'demoTreeGrid1';
    this.tableOptions.enableColumnChooser = false;
    this.tableOptions.enableSort = true;
    this.tableOptions.enableColumnFilters = true;
    this.tableOptions.isTreeStructure = false;
    this.tableOptions.data = data;
    this.tableOptions.columns = columns;
    this.tableOptions.enableContextMenu = true;
    this.tableOptions.contextMenuItems = [
      { id: 'view', name: 'View' },
      { id: 'edit', name: 'Edit' },
      { id: 'delete', name: 'Delete' },
    ];
  }
  gridRowSelection($event) {
    console.log('Selected row count :' + $event.length);
  }
}
