import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AchievementService {

    constructor(private cookieService: CookieService) { }

    getAchievement(name) {
        this.cookieService.set(`ProjectsViewer.achievement.${name}`, 'Found', { secure: true, sameSite: 'Strict' })
        this.cookieService.set('ProjectsViewer.showachievement', 'True', { secure: true, sameSite: 'Strict' })
    }
}
