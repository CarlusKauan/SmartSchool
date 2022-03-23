import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  // propriedade, que recebe como paramentro o titulo !
  @Input() titulo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
