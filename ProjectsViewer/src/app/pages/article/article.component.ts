import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/services/achievement-service.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    routeSub: Subscription;
    page: string = '';
    constructor(private ActivatedRoute: ActivatedRoute, private router: Router, private cookieService: CookieService, private achievementService: AchievementService) { }

    ngOnInit(): void {
        this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
            if (params['name'] == undefined) {
                this.router.navigate(['article', 'works']);
            } else if (params['name'] == 'works') {
                this.page = "easterEgg";
                this.achievementService.getAchievement('articleWorks');
            } else if (params['name'] == 'about-me') {
                this.page = "AboutMe";

            }


        })
    }

}
