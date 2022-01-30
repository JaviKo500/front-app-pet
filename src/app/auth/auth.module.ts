import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { DirectiveModule } from '../directives/directive.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ImageComponent } from './shared/image/image.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent, ImageComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    DirectiveModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ]
})
export class AuthModule { }
