import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Achievement, Achievements } from '../../../assets/achievements'

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

    achievements: Achievement[];
    unlocked = []
    amountNotUnlocked = 0;
    amount = 0;
    hiddenAchievements = 0;
    totalHiddenAchievements = 0;

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
        this.achievements = Achievements;
        this.achievements.forEach(element => {
            this.amount++;
            if (this.cookieService.check(element.cookie) && this.cookieService.get(element.cookie) === "Found") {
                this.unlocked.push(element.name)
            } else {
                this.amountNotUnlocked++;
                if (element.Hidden) {
                    this.hiddenAchievements++;
                }
            }
            if (element.Hidden) {
                this.totalHiddenAchievements++;
            }
        });

    }

}
