import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sideBarOpen = true;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
    this.matIconRegistry.addSvgIcon('es-flag', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/flags/es.svg'));
    this.matIconRegistry.addSvgIcon('en-flag', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/flags/en.svg'));
  }

  sideBarToogle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
