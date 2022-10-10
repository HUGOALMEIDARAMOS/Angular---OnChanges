import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css']
})
export class OnchangesComponent implements OnInit {

  names: string = "";
  newName = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.newName = this.names;
  }

}
