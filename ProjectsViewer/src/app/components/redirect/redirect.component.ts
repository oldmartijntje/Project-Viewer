import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  pageNumber: number;

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.set('ProjectsViewer.achievement.howdidwegethere', 'Found')
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      if (params['pageNumber'] != undefined) {
        if (!isNaN(params['pageNumber'])) {
          this.router.navigate(['page', params['pageNumber']]);
        } else {
          this.router.navigate(['']);
        }
      } else if (params['page'] != undefined) {
        this.router.navigate([params['page']]);
      } else {
        this.cookieService.set('ProjectsViewer.achievement.howdidwegethere', 'Found')
        this.cookieService.set('ProjectsViewer.showachievement', 'True')
        this.router.navigate(['']);
      }
    });
  }


  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  cookiePlusNumber(cookie: string, number: number, startNumber: number) {
    if (!this.cookieService.check(cookie)) {
      this.cookieService.set(cookie, String(startNumber));
    }
    else {
      this.cookieService.set(cookie, String(Number(this.cookieService.get(cookie)) + number));
    }
  }

}
