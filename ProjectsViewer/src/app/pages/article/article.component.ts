import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/services/achievement-service.service';
import { PageData, PagesData, getDataByKey } from 'src/assets/viewerSettings';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    routeSub: Subscription;
    page: string = '';
    data = [];

    constructor(private ActivatedRoute: ActivatedRoute,
        private router: Router,
        private cookieService: CookieService,
        private achievementService: AchievementService) { }

    ngOnInit(): void {
        console.log(this.getPageDataByKey("info"))
        this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
            if (params['name'] == undefined) {
                this.router.navigate(['article', 'works']);
            } else if (params['name'] == 'works') {
                this.page = "easterEgg";
                this.achievementService.getAchievement('articleWorks');
            } else if (params['name'] == 'about-me') {
                this.page = "AboutMe";
            } else if (params['name'] == 'pages') {
                this.page = "pages";
                this.data = PagesData;
                this.achievementService.getAchievement('Navigator');
            }


        })
    }

    getPageDataByKey(key, data: PageData[] = PagesData) {
        return getDataByKey(key, data);
    }

    redirect(page: string, mode: string = "article") {
        if (mode === "article") {
            this.router.navigate(['r', 'p', page]);
        } else if (mode === "warp" && page === this.getPageDataByKey("pages")["key"]) {
            this.achievementService.getAchievement('UselessNavigatorWarp');
            this.achievementService.getAchievement('NavigatorWarp');
            this.router.navigate(['r', 'p', page]);
        } else if (mode === "warp") {
            this.achievementService.getAchievement('NavigatorWarp');
            this.router.navigate(['r', 'p', page]);
        } else {
            this.router.navigate(['r', page]);
        }
    }

}
