import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public titulo = "Perfil"

  perfil = ['Solrac', 'Nak', 'Fallen', 'Gaules','Boltz']

  constructor() { }

  ngOnInit(): void {
  }

}
