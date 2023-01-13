import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
    offlineMode: boolean;
    showAchievements: boolean;

    constructor(private projectService: ProjectService, private cookieService: CookieService, private router: Router) { }

    ngOnInit(): void {
        if (this.cookieService.get('ProjectsViewer.showachievement') === "True") {
            this.showAchievements = true;
        } else {
            this.showAchievements = false;
        }
        this.offlineMode = this.cookieService.get('ProjectsViewer.mode') === 'Offline';
    }

    changeMode() {
        if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
            this.cookieService.set('ProjectsViewer.mode', 'Online', { secure: true, sameSite: 'Strict' });
        } else {
            this.cookieService.set('ProjectsViewer.mode', 'Offline', { secure: true, sameSite: 'Strict' });
        }
        window.location.reload();
    }

    deleteCookies() {
        this.cookieService.deleteAll();
        window.location.reload();
    }

    logCookies() {
        console.log(this.cookieService.getAll());
    }

    redirect(page: string) {
        this.router.navigate(['r', 'p', page]);
    }

}
