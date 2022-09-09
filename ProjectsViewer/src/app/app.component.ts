import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  themeSub: Subscription | undefined;
  themes: any;
  constructor(private httpClient: HttpClient, private themeService: ThemeService, private cookieService: CookieService) { }

  ngOnInit() {
    if (!this.cookieService.check('ProjectsViewer.mode')) {
      this.cookieService.set('ProjectsViewer.mode', 'Online')
    }
    if (!this.cookieService.check('ProjectsViewer.theme')) {
      this.cookieService.set('ProjectsViewer.theme', 'Default')
    }
    var theme = this.cookieService.get('ProjectsViewer.theme');
    this.themeService.tryTheme(theme);

  }
  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}




