import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  offlineMode: boolean | undefined;

  constructor(private projectService: ProjectService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.offlineMode = this.cookieService.get('ProjectsViewer.mode') === 'Offline';
  }

  changeMode() {
    if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
      this.cookieService.set('ProjectsViewer.mode', 'Online');
    } else {
      this.cookieService.set('ProjectsViewer.mode', 'Offline');
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

}
