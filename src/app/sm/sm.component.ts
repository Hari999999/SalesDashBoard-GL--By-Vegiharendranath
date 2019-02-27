import { Component, ViewChild ,OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css']
})
export class SmComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  constructor() { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
