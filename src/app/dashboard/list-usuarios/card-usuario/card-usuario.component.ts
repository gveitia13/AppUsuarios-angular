import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any
  imgUrl: string = ''
  name: string = ''
  email: string = ''
  id: number = 0

  ngOnInit(): void {
    this.name = this.user.name
    this.email = this.user.email
    this.imgUrl = 'https://randomuser.me/api/portraits/men/75.jpg'
    this.id = this.user.id
  }

}
