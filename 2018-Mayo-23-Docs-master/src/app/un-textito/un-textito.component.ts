import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-un-textito',
  templateUrl: './un-textito.component.html',
  styleUrls: ['./un-textito.component.scss']
})
export class UnTextitoComponent implements OnInit {
  itemCount: number = 4;
  textitoTitulo: string = "Agrega más cosas amiguito";
  btnText: string = 'Add an Item'; 
  goalText: string = 'My first life goal';
  lol=[];


  constructor() { }

  ngOnInit() {
    this.itemCount = this.lol.length;
  }
  addItem() {
    this.lol.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.lol.length;
  }

}
