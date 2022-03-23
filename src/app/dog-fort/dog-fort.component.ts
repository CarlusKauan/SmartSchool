import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-fort',
  templateUrl: './dog-fort.component.html',
  styleUrls: ['./dog-fort.component.css']
})
export class DogFortComponent implements OnInit {

  titulo = "Dog Fort"

  dogfort = [
    {nome:'Bulldog'},
    {descricao: 'Marinheiro'},
    {nome: 'Vira-lata'},
    {descricao: 'fuzileiro'},
    {nome: 'cachorro-preto'},
    {descricao: 'montenheiro'},
    {nome: 'Listrado'},
    {descricao: 'voador'},
    {nome: 'Cachorro-voador'},
    {descricao: 'voador'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
