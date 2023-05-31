import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: string | null
  name: string = ''
  lastName: string = ''
  urlImg: string = ''
  phone: string = ''
  email: string = ''
  gender: string = ''
  loading = true

  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService) {
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario() {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      this.name = data.name
      this.lastName = 'No hay last name'
      this.email = data.email
      this.phone = '+9999999999'
      this.gender = data.gender
      this.urlImg = 'https://randomuser.me/api/portraits/men/75.jpg'
      this.loading = false
    })
  }
}
