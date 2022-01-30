import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// service
import { MessageService } from 'primeng/api';

import { UserMessageFormService } from '../../services/user/user-message-form.service';
import { UserService } from '../../services/user/user.service';
import { UserValidationsService } from '../../services/user/user-validations.service';

// interfaces
import { User } from '../../interfaces/user/user';
import { ResponseRequest } from '../../interfaces/response-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this._formBuilder.group({
    names:     [ ,[Validators.required, Validators.minLength(2), Validators.pattern(this.userMsgFormService.namePattern)]],
    email:     [ ,[Validators.required, Validators.pattern(this.userMsgFormService.emailPattern)], [this._userValidatorService]],
    telephone: [ '12345678' ,[Validators.required, Validators.pattern(this.userMsgFormService.phonePattern)]],
    password:  [ '123456' ,[Validators.required, Validators.minLength(6)]],
  });

  
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _messageService: MessageService,
    private _userService: UserService,
    private _userValidatorService: UserValidationsService,
    public  userMsgFormService: UserMessageFormService
  ) {
    this.userMsgFormService.form = this.registerForm; 
  }

  ngOnInit(): void {
  }

  createUser = (): void => {
    if (this.registerForm.valid) {
      let user!: User;
      user = this.registerForm.value;
      user.active = true;
      user.role = {type: 'ROLE_CLIENT'};
      this._userService.create(user).subscribe( (response: ResponseRequest) => {
        this._router.navigate(['dashboard/home']);
      }, error => {
        this._messageService.add({severity: 'error', summary: `Opps!... ${error.error.message}`, detail: `Check your entered information`})
      });
    }
    this.registerForm.markAllAsTouched();
  }

}
