import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/services/achievement-service.service';

@Component({
    selector: 'app-redirect',
    templateUrl: './redirect.component.html',
    styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {
    routeSub: Subscription;
    pageNumber: number;

    constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private cookieService: CookieService, private achievementService: AchievementService) { }
    hardcodedRedirects = {
        "info": ["article", "info"],
        "home": [""],
        "aboutMe": ["article", "about-me"],
        "articleList": ["article", "articles"],
    }

    ngOnInit(): void {
        this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
            if (params['pageNumber'] != undefined) {
                if (!isNaN(params['pageNumber'])) {
                    this.router.navigate(['page', params['pageNumber']]);
                } else {
                    this.router.navigate(['']);
                }
            } else if (params['page'] != undefined && params['page'] in this.hardcodedRedirects) {
                this.router.navigate(this.hardcodedRedirects[params['page']]);
            } else if (params['page'] != undefined) {
                this.router.navigate([params['page']]);
            } else {
                this.achievementService.getAchievement('howdidwegethere');
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
            this.cookieService.set(cookie, String(startNumber), { secure: true, sameSite: 'Strict' });
        }
        else {
            this.cookieService.set(cookie, String(Number(this.cookieService.get(cookie)) + number), { secure: true, sameSite: 'Strict' });
        }
    }

}
