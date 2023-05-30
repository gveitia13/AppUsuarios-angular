import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = []

  constructor(private usuarioService: UsuarioService) {
  }

  getUsuarios = () => this.usuarioService.getUsuarios().subscribe(data => {
    console.log(data)
    this.listUsuarios = data
  })

  ngOnInit(): void {
    this.getUsuarios()
  }
}
