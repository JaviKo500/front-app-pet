import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { ResponseRequest } from '../../interfaces/response-request';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserValidationsService implements AsyncValidator{
  constructor(
    private _userService: UserService
  ) { }
  
  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(1000).pipe(
      map(() => control.value),
      switchMap((email) => this._userService.findByEmail(email)),
      map((resp: ResponseRequest) => {
        return (resp.data === null) ?  null : {emailexists: true}  ;
      })
    );
  }
}
