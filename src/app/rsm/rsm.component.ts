import { Component, ViewChild, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-rsm',
  templateUrl: './rsm.component.html',
  styleUrls: ['./rsm.component.css']
})
export class RsmComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  
  constructor() { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
