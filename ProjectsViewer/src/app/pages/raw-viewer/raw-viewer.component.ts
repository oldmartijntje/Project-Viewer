import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';
import { projects } from "../../../assets/offlineProjects";

@Component({
    selector: 'app-raw-viewer',
    templateUrl: './raw-viewer.component.html',
    styleUrls: ['./raw-viewer.component.scss']
})
export class RawViewerComponent implements OnInit, OnDestroy {
    projectServiceSubsription: Subscription | undefined;
    title = 'RawProjectsViewer';
    projects: Project[] = [];
    projectToEdit?: Project;

    constructor(private projectService: ProjectService, private cookieService: CookieService) { }

    ngOnInit(): void {
        if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
            this.projects = projects;
        } else {
            this.projectServiceSubsription = this.projectService
                .getProjects()
                .subscribe((result: Project[]) => (this.projects = result));
        }
    }

    updateProjectList(projects: Project[]) {
        this.projects = projects;
        this.projectToEdit = undefined;

    }

    initNewProject() {
        if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
            alert("You are in offline mode, so you can't create a new project");
        } else {
            this.projectToEdit = new Project();
        }
    }

    editProject(project: Project) {
        if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
            alert("You are in offline mode, so you can't edit the project");
        } else {
            this.projectToEdit = project;
        }
    }
    ngOnDestroy(): void {
        if (this.projectServiceSubsription) {
            this.projectServiceSubsription.unsubscribe();
        }
    }
    logProject(project: Project) {
        console.log(project)
    }
}

