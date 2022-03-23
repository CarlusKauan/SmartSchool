import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { nome: 'Carlos'},
    { nome: 'Kaique'},
    { nome: 'Kauan' },
    { nome: 'Kewen' },
    { nome: 'Nadja' },
    { nome: 'Maria' },
    { nome: 'Paulo' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
