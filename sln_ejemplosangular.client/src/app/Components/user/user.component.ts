import { Component } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service'

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users: any[] = [];

  constructor(private _userService: UsuarioService) {
    this.users = _userService.GetUsers();
  }
}
