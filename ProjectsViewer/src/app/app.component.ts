import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    themeSub: Subscription | undefined;
    themes: any;
    constructor(private httpClient: HttpClient, private themeService: ThemeService) { }

    ngOnInit() {
        if (localStorage.getItem('ProjectsViewer.showachievement') === null) {
            localStorage.setItem('ProjectsViewer.showachievement', 'False');
        }
        if (localStorage.getItem('ProjectsViewer.mode') === null) {
            localStorage.setItem('ProjectsViewer.mode', 'Offline');
        }
        if (localStorage.getItem('ProjectsViewer.theme') === null) {
            localStorage.setItem('ProjectsViewer.theme', 'Default');
        }

        var theme = localStorage.getItem('ProjectsViewer.theme');
        this.themeService.tryTheme(theme);

    }
    ngOnDestroy(): void {
        if (this.themeSub) {
            this.themeSub.unsubscribe();
        }
    }
}




