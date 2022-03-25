import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'Carlos', sobrenome: 'Kauan', telefone: 33225},
    { id: 2, nome: 'Kaique', sobrenome: 'Kauan', telefone: 33225},
    { id: 3, nome: 'Kauan', sobrenome: 'Kauan', telefone: 33225},
    { id: 4, nome: 'Kewen' , sobrenome: 'Kauan', telefone: 33225},
    { id: 5, nome: 'Nadja' , sobrenome: 'Kauan', telefone: 33225},
    { id: 6, nome: 'Maria' , sobrenome: 'Kauan', telefone: 33225},
    { id:7, nome: 'Paulo', sobrenome: 'Kauan', telefone: 33225},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
