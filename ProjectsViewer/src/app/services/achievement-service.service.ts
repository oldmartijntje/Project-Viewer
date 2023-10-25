import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AchievementService {

    constructor() { }

    getAchievement(name) {
        localStorage.setItem(`ProjectsViewer.achievement.${name}`, 'Found')
        localStorage.setItem('ProjectsViewer.showachievement', 'True')
    }
}
