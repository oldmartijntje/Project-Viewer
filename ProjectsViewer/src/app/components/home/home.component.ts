import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';
import { projects } from "../../offlineProjects";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'ProjectsViewer';
  projects: Project[] = [];
  projectServiceSubsription: Subscription;
  routeSub: Subscription;
  pageNumber: number;
  selectedProjects: Project[] = [];
  maxNumberPerPage = 12;
  maxPages: number;

  constructor(private ActivatedRoute: ActivatedRoute, private projectService: ProjectService, private cookieService: CookieService, private router: Router) { }

  ngOnDestroy(): void {
    if (this.projectServiceSubsription) {
      this.projectServiceSubsription.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      if (params['pageNumber'] != undefined) {
        if (!isNaN(params['pageNumber'])) {
          this.pageNumber = params['pageNumber'];
        } else {
          this.router.navigate(['']);
        }

      } else {
        this.pageNumber = 1;
      }
    });
    if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
      this.projects = projects;
      this.selectedProjects = this.projects.slice((this.pageNumber - 1) * this.maxNumberPerPage, (this.pageNumber - 1) * this.maxNumberPerPage + this.maxNumberPerPage);
      this.maxPages = Math.ceil(this.projects.length / this.maxNumberPerPage);
    } else {
      this.projectServiceSubsription = this.projectService
        .getProjects()
        .subscribe((result: Project[]) => {
          this.projects = result;
          this.selectedProjects = this.projects.slice((this.pageNumber - 1) * this.maxNumberPerPage, (this.pageNumber - 1) * this.maxNumberPerPage + this.maxNumberPerPage);
          this.maxPages = Math.ceil(this.projects.length / this.maxNumberPerPage);
        });
    }
  }

  openProjectDetails(id: number): void {
    if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
      this.router.navigate(['offlineProject', id.toString()]);
    } else {
      this.router.navigate(['project', id.toString()]);
    }
  }

  moveToPage(pageNumber: number): void {
    this.router.navigate(['r', pageNumber]);
  }

  nextPage(number: number): void {
    var y: number = + this.pageNumber;
    if (y + number > 0 && y + number <= this.maxPages) {
      this.moveToPage(y + number)
    }
  }


}
