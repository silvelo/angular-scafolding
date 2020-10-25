import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from 'src/app/store';
import * as fromUserActions from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hidePassword = true;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromRoot.AppState>) {
    this.loginForm = this.fb.group(
      {
        username: '',
        password: ''
      }
    );
  }

  ngOnInit(): void {

  }

  changeProperty(event: Event) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  async onSubmit(user: LoginForm) {
    this.store.dispatch(fromUserActions.loginUser(user));
  }
}
