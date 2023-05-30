import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public/v2/users'
  token = '0672412203447d327a03fbc82082dfeb155be9466b10127714d7c8bd71206c76'

  constructor(private http: HttpClient) {
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token)
  }
}
