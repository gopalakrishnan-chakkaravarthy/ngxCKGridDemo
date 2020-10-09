import { Component, OnInit } from '@angular/core';
import { ColumnConfiguration, TableConfiguration } from 'ngx-ck-grid';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css'],
})
export class TreeGridComponent implements OnInit {
  tableOptions: TableConfiguration;
  tableIcons: any = {};

  ngOnInit() {
    this.tableOptions = new TableConfiguration();
    this.addSampleRows(100);
  }
  addSampleRows(rows: number): any {
    const treeObject: any[] = [];
    let treeObjectHeader: ColumnConfiguration[] = [];
    treeObjectHeader = [
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
        visible: false,
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
        visible: false,
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
        visible: false,
      },
    ];
    for (let i = 0; i < rows; i++) {
      treeObject.push({
        id: i,
        columnone: 'Level - 0 >' + i,
        columntwo: i + 1,
        columnthree: 'Column Three Data',
        columnfour: '1980/2/5',
        columnfive: 'Column Five Data',
        columnsix: 'Column Six Data',
        columnseven: 'Column Seven Data',
        columneight: 'Column Eight Data',
        columnnine: 'Column Nine Data',
        columnten: 'Column Ten Data',
        children: [
          {
            id: i + 1,
            columnone: 'Level - 1 > ' + i,
            columntwo: i + 2,
            columnthree: 'Col',
            columnfour: '1990/1/21',
            columnfive: 'Column Five Children Data',
            columnsix: 'Column Six Children Data',
            columnseven: 'Column Seven Children Data',
            columneight: 'Column Eight Children Data',
            columnnine: 'Column Nine Children Data',
            columnten: 'Column Ten Children Data',
          },
          {
            id: i + 2,
            columnone: 'Level - 2 > ' + i,
            columntwo: i + 3,
            columnthree: 'Child Column Data',
            columnfour: '1990/1/22',
            columnfive: 'Column Five Nested Children Data',
            columnsix: 'Column Six Nested Children Data',
            columnseven: 'Column Seven Nested Children Data',
            columneight: 'Column Eight Nested Children Data',
            columnnine: 'Column Nine Nested Children Data',
            columnten: 'Column Ten Nested Children Data',
            children: [
              {
                id: i + 3,
                columnone: 'Level - 3 > ' + 1,
                columntwo: i + 4,
                columnthree: 'Child Column Data ' + i,
                columnfour: '1990/1/21',
                columnfive: 'Column Five 2ndNested Children Data',
                columnsix: 'Column Six 2ndNested Children Data',
                columnseven: 'Column Seven 2ndNested Children Data',
                columneight: 'Column Eight 2ndNested Children Data',
                columnnine: 'Column Nine 2ndNested Children Data',
                columnten: 'Column Ten 2ndNested Children Data',
                children: [
                  {
                    id: i + 4,
                    columnone: 'Level - 4',
                    columntwo: i + 5,
                    columnthree: 'Leaf Column Data ' + i,
                    columnfour: '1990/1/21',
                    columnfive: 'Column Five Leaf Data',
                    columnsix: 'Column Six Leaf Data',
                    columnseven: 'Column Seven Leaf Data',
                    columneight: 'Column Eight Leaf Data',
                    columnnine: 'Column Nine Leaf Data',
                    columnten: 'Column Ten Leaf Data',
                  },
                  {
                    id: i + 5,
                    columnone: 'Level - 4',
                    columntwo: i + 6,
                    columnthree: 'Leaf Column Data ' + i,
                    columnfour: '1990/1/21',
                    columnfive: 'Column Five Leaf Data',
                    columnsix: 'Column Six Leaf Data',
                    columnseven: 'Column Seven Leaf Data',
                    columneight: 'Column Eight Leaf Data',
                    columnnine: 'Column Nine Leaf Data',
                    columnten: 'Column Ten Leaf Data',
                  },
                  {
                    id: i + 6,
                    columnone: 'Level - 4',
                    columntwo: i + 7,
                    columnthree: 'Leaf Column Data ' + i,
                    columnfour: '1990/1/21',
                    columnfive: 'Column Five Leaf Data',
                    columnsix: 'Column Six Leaf Data',
                    columnseven: 'Column Seven Leaf Data',
                    columneight: 'Column Eight Leaf Data',
                    columnnine: 'Column Nine Leaf Data',
                    columnten: 'Column Ten Leaf Data',
                  },
                ],
              },
            ],
          },
        ],
      });
    }
    this.initTableOptions(treeObject, treeObjectHeader);
  }
  initTableOptions(data, columns) {
    this.tableOptions.enableRowSelection = true;
    this.tableOptions.rowSelection = 'multiple';
    this.tableOptions.icons = this.tableIcons;
    this.tableOptions.id = 'demoTreeGrid1';
    this.tableOptions.enableColumnChooser = true;
    this.tableOptions.enableSort = true;
    this.tableOptions.enableColumnFilters = true;
    this.tableOptions.isTreeStructure = true;
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
