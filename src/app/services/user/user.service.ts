import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../../interfaces/user/user';
import { ResponseRequest } from '../../interfaces/response-request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = `${environment.baseUrl}/user`;

  private _user!: User;

  get user() {
    return {...this._user};
  }
  constructor(
    private _http: HttpClient
  ) { }

  create = (user: User): Observable<ResponseRequest> => {    
    return this._http.post<ResponseRequest>(`${this._url}`, user);
  }

  findByEmail = (email: string): Observable<any> => {    
    return this._http.get<ResponseRequest>(`${this._url}/email/${email}`);
  }
}
