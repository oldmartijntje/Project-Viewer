import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Achievement, Achievements } from '../../achievements'

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Achievement[];
  unlocked = []

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.achievements = Achievements;
    this.achievements.forEach(element => {
      if (this.cookieService.check(element.cookie) && this.cookieService.get(element.cookie) === "Found") {
        this.unlocked.push(element.name)
      }
    });

  }

}
