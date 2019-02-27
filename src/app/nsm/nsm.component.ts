import { Component,ViewChild, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-nsm',
  templateUrl: './nsm.component.html',
  styleUrls: ['./nsm.component.css']
})
export class NsmComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;

  constructor() { }

  ngOnInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

}
