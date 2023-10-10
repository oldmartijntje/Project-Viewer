import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { projects } from "../../../assets/offlineProjects";
import { AchievementService } from 'src/app/services/achievement-service.service';
import { WebsiteVersion } from 'src/assets/viewerSettings';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
    routeSub: Subscription;
    ProjectSub: Subscription;
    public static projectIdNumber: number;
    projectId: string;
    projectServiceSubsription: Subscription;
    showOfflineError: boolean;
    offline: boolean;
    projects: Project[] = [];
    public static selectedProjectSave: Project;
    selectedProject: Project;

    constructor(private achievementService: AchievementService, private ActivatedRoute: ActivatedRoute, private router: Router, private cookieService: CookieService, private projectService: ProjectService) { }

    ngOnInit(): void {
        this.achievementService.getAchievement('inspectorGadged');
        this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
            if (params['id'] == undefined) {
                this.offline = true;
                this.projectId = params['oid'];
                DetailsComponent.projectIdNumber = +this.projectId;
                this.showOfflineError = false;
                this.projects = projects;
                this.findSelectedProject();
            } else {
                this.offline = false;
                this.projectId = params['id'];
                DetailsComponent.projectIdNumber = +this.projectId;
                if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
                    this.showOfflineError = true;
                } else {
                    this.showOfflineError = false;
                    this.getOnlineProjects();
                }
            }
        })
    }

    getOnlineProjects() {
        this.projectServiceSubsription = this.projectService
            .getProjects()
            .subscribe((result: Project[]) => {
                this.projects = result;
                this.findSelectedProject();
            });
    }

    ngOnDestroy(): void {
        if (this.projectServiceSubsription) {
            this.projectServiceSubsription.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
        if (this.ProjectSub) {
            this.ProjectSub.unsubscribe();
        }
    }

    findSelectedProject() {
        this.projects.forEach(function (testingProject) {
            if (testingProject.id == DetailsComponent.projectIdNumber) {
                DetailsComponent.selectedProjectSave = testingProject;
            }
        });
        this.selectedProject = DetailsComponent.selectedProjectSave;
        if (this.selectedProject.status.toLocaleLowerCase().includes("ignore this".toLocaleLowerCase())) {
            this.achievementService.getAchievement('ShyGuy');
        }
        if (this.selectedProject.id == 14) {
            this.selectedProject.version = WebsiteVersion;
        }
        console.log(DetailsComponent.selectedProjectSave)
        console.log(this.selectedProject)
    }

    redirectToSpecial(page) {
        this.router.navigate(['special', page]);
    }

    addAchievement(achievement: string, redirectUrl = '') {
        this.cookieService.set(achievement, "Found", { secure: true, sameSite: 'Strict' })
        if (redirectUrl != '') {
            window.location.href = redirectUrl;
        }
    }

    sendToUrl(url: string) {
        window.location.href = url;
    }
}
