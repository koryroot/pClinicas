import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor() { }
  mensaje: string;
  @Output() search =  new EventEmitter<string>();
  ngOnInit() {}


  send(){
    console.log(this.mensaje);
    this.search.emit(this.mensaje);
  }

}
