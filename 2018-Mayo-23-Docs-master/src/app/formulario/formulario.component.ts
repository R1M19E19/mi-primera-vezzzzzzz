import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  itemEdad: number = 0;
  Nombre: string = 'nombre del Usuario';
  sexo: string = ''; 
  correoeletronico: string = 'correo del usuario';
  goals=[];

  constructor() { }

  ngOnInit() {
  }

}
