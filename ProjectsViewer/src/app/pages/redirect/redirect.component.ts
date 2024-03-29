import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/services/achievement-service.service';
import { PagesData, getDataByKey } from '../../../assets/viewerSettings'

@Component({
    selector: 'app-redirect',
    templateUrl: './redirect.component.html',
    styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {
    routeSub: Subscription;
    pageNumber: number;

    constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private achievementService: AchievementService) { }


    ngOnInit(): void {
        this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
            if (params['pageNumber'] != undefined) {
                if (!isNaN(params['pageNumber'])) {
                    this.router.navigate(['page', params['pageNumber']]);
                } else {
                    this.router.navigate(['']);
                }
            } else if (params['page'] != undefined && getDataByKey(params['page']) != undefined) {
                this.router.navigate(getDataByKey(params['page'])['routerRedirect']);
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

}
