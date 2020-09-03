import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toogleChange: EventEmitter<any> = new EventEmitter();
  public languages: Language[] = [{
    country: 'Spanish',
    locale: 'es'
  },
  {
    country: 'English',
    locale: 'en'
  }];

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  toogleSideBar() {
    this.toogleChange.emit();
    setTimeout(() => window.dispatchEvent(new Event('resize')), 300);

  }


  onChangeLanguage(lanuage: Language) {
    this.translateService.use(lanuage.locale);
  }

}
