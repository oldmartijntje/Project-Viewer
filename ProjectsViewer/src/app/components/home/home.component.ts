import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';
import { projects } from "../../offlineProjects";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'ProjectsViewer';
  projects: Project[] = [];
  projectServiceSubsription: Subscription;

  constructor(private projectService: ProjectService, private cookieService: CookieService, private router: Router) { }

  ngOnDestroy(): void {
    if (this.projectServiceSubsription) {
      this.projectServiceSubsription.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
      this.projects = projects;
    } else {
      this.projectServiceSubsription = this.projectService
      .getProjects()
      .subscribe((result: Project[]) => (this.projects = result));
    }


  }

  openProjectDetails(id: number): void {
    if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
      this.router.navigate(['offlinePage', id.toString()]);
    } else {
      this.router.navigate(['page', id.toString()]);
    }
  }


}
