import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professores = [
    'Erick',
    'Edilson',
    'Valter',
    'Marcelo',
    'Quiteria',
    'Sandra'
  ]

  constructor() { }

  ngOnInit() {
  }

}
