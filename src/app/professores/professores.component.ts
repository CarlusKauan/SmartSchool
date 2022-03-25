import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professores = [
    { id:1, nome:'Erick', disciplina: 'Matematica'},
    { id:2, nome:'Valter', disciplina: 'Matematica'},
    { id:3, nome:'Marcelo', disciplina: 'Matematica'},
    { id:4, nome:'Quiteria', disciplina: 'Matematica'},
    { id:5, nome:'Sandra', disciplina: 'Matematica'},
    { id:6, nome:'Edilson', disciplina: 'Matematica'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
