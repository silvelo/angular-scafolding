import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';


import * as fromRoot from 'src/app/store';
import * as fromUser from 'src/app/store/user/user.selectors';
import * as fromUserActions from 'src/app/store/user/user.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toogleChange: EventEmitter<any> = new EventEmitter();
  public user$: Observable<User>
  public languages: Language[] = [{
    country: 'Spanish',
    locale: 'es'
  },
  {
    country: 'English',
    locale: 'en'
  }];

  constructor(public translateService: TranslateService, private store: Store<fromRoot.AppState>) { }

  ngOnInit(): void {
    this.user$ = this.store.select(fromUser.selectUsers);
  }

  toogleSideBar() {
    this.toogleChange.emit();
    setTimeout(() => window.dispatchEvent(new Event('resize')), 300);
  }

  onChangeLanguage(lanuage: Language) {
    this.translateService.use(lanuage.locale);
  }

  onLogout() {
    this.store.dispatch(fromUserActions.logoutUser());
  }

}
