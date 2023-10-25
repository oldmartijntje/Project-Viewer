import { Component, OnInit } from '@angular/core';
import { Achievement, Achievements } from '../../../assets/achievements'
import { Meta } from '@angular/platform-browser';

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

    constructor(private meta: Meta) {

        // Set OG metadata dynamically for the /achievements route
        this.meta.updateTag({ property: 'og:title', content: 'Achievements Page Title' });
        this.meta.updateTag({ property: 'og:description', content: 'Description for Achievements Page' });
        this.meta.updateTag({ property: 'og:image', content: 'URL to Image for Achievements Page' });
        this.meta.updateTag({ property: 'og:url', content: 'URL for Achievements Page' });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Your Site Name' });

    }

    ngOnInit(): void {
        this.achievements = Achievements;
        this.achievements.forEach(element => {
            this.amount++;
            if (localStorage.getItem(element.cookie) != null && localStorage.getItem(element.cookie) === "Found") {
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
