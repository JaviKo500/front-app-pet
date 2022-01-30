import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserMessageFormService {
  
  public form!: FormGroup;

  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public namePattern: string = '^[a-zA-ZñÑ ]*$';
  public phonePattern: string = '^[0-9][0-9]{6,9}$';

  constructor() { }

  get nameErrorMsg(): string {
    const errors = this.form.get('names')?.errors;
    if (errors?.required) {
      return 'Name is Required';
    } else if (errors?.minlength) {
      return 'Enter at least 2 characters';
    } else if (errors?.pattern) {
      return 'Enter only letters';
    }
    return '';
  }
  get userNameErrorMsg(): string {
    const errors = this.form.get('userName')?.errors;
    if (errors?.required) {
      return 'Username is Required';
    } else if (errors?.minlength) {
      return 'Enter at least 2 characters';
    }
    return '';
  }

  get emailErrorMsg(): string {
    const errors = this.form.get('email')?.errors;    
    if (errors?.required) {
      return 'Email is Required';
    } else if (errors?.pattern) {
      return 'Invalid e-mail';
    } else if (errors?.emailexists) {
      return 'Email used';
    }
    return '';
  }

  get phoneErrorMsg(): string {
    const errors = this.form.get('telephone')?.errors;
    if (errors?.required) {
      return 'Phone is Required';
    } else if (errors?.pattern) {
      return 'Invalid phone number';
    }
    return '';
  }

  get passErrorMsg(): string {
    const errors = this.form.get('password')?.errors;
    if (errors?.required) {
      return 'Password is Required';
    } else if (errors?.minlength) {
      return 'Enter at least 6 characters';
    }
    return '';
  }

  isValidField = (field: string): boolean => {
    return (this.form.controls?.[field].invalid || false) && (this.form.controls?.[field].touched || false);
  }
}
