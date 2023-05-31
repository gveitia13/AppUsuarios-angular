import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = []
  loading: boolean = true;

  constructor(private usuarioService: UsuarioService) {
  }

  getUsuarios = () => this.usuarioService.getUsuarios().subscribe(data => {
    this.listUsuarios = data
    this.loading = false
  })

  ngOnInit(): void {
    this.getUsuarios()
  }
}
