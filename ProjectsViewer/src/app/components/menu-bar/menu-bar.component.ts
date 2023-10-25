import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
    offlineMode: boolean;
    showAchievements: boolean;

    constructor(private projectService: ProjectService, private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem("ProjectsViewer.showachievement") === "True") {
            this.showAchievements = true;
        } else {
            this.showAchievements = false;
        }
        this.offlineMode = localStorage.getItem('ProjectsViewer.mode') === 'Offline';
    }

    changeMode() {
        if (localStorage.getItem('ProjectsViewer.mode') === 'Offline') {
            localStorage.setItem('ProjectsViewer.mode', 'Online');
        } else {
            localStorage.setItem('ProjectsViewer.mode', 'Offline');
        }
        window.location.reload();
    }

    deleteCookies() {
        localStorage.clear();
        window.location.reload();
    }

    logCookies() {
        var items = {};
        for (let index = 0; index < localStorage.length; index++) {
            items[localStorage.key(index)] = localStorage.getItem(localStorage.key(index));
        }
        console.log(items);
    }

    redirect(page: string, mode: string = "article") {
        if (mode === "article") {
            this.router.navigate(['r', 'p', page]);
        } else {
            this.router.navigate(['r', page]);
        }
    }

}
