import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AchievementService } from 'src/app/services/achievement-service.service';

@Component({
    selector: 'app-sct-tm',
    templateUrl: './sct-tm.component.html',
    styleUrls: ['./sct-tm.component.scss']
})
export class SCTTMComponent implements OnInit {
    clicks = [0, 0];
    onHover = false;
    to;
    logo = 'logo';
    logoClass = "showDefault";
    routeSub;
    incidentData;
    loadedIncident;
    constructor(private cookieService: CookieService, private achievementService: AchievementService) { }

    ngOnInit(): void {
    }

    click(which) {
        // this makes it so if you click both 4's it changes the language to dev, and unlock the dev menu on refresh
        if (which == 2) {
            this.clicks = [0, 0];
        }
        // this is just an easter egg
        this.clicks[which] += 1;
        if (this.clicks[0] == 4 && this.clicks[1] == 4) {
            this.logoClass = "showWait";
            this.achievementService.getAchievement('404notfound');
        } else if (this.clicks[which] > 4) {
            this.clicks = [0, 0];
            this.logoClass = "showDefault";
        }
    }
    enter() {
        // this is just an easter egg
        // if you clicked the 4's 4 times, and then hovered over the 0, it set's language to blank
        if (this.clicks[0] == 4 && this.clicks[1] == 4) {
            this.to = setTimeout(() => {
                this.onHover = true;
                clearTimeout(this.to);
                this.logoClass = "showDefault";
                this.achievementService.getAchievement('40farfetched');

            }, 10000);
        }
    }

    leave() {
        // this is just an easter egg
        clearTimeout(this.to);
        this.onHover = false;
    }

}
