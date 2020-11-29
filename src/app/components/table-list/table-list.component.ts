import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {

  @Input() header: [] = [];
  @Input() endpoit : string;
  
  constructor() { }

  ngOnInit() {}

}
