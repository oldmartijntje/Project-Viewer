import { Component, OnDestroy, OnInit } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
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
    typeIcons = ["Python", "Angular", "rpg maker xp", "Pokemon Essentials", "Scratch", "Minecraft", "C#", "NSMB Editor"]
    statusIcons = ["In Progress", "Completed", "On Hold", "Cancelled"]
    inconRedirect = {
        "Python": "Python",
        "Angular": "Angular",
        "rpg maker xp": "RPG Maker XP",
        "Pokemon Essentials": "Pokemon Essentials",
        "Scratch": "Scratch",
        "Minecraft": "Minecraft",
        "C#": "CSharp",
        "NSMB Editor": "nsmb ds cover",
        "In Progress": "dev",
        "Completed": "checkmark",
        "On Hold": "pause",
        "Cancelled": "none"
    }
    title = 'ProjectsViewer';
    loadedProjects: Project[] = [];
    projectServiceSubsription: Subscription;
    routeSub: Subscription;
    pageNumber: number;
    selectedProjects: Project[] = [];
    maxNumberPerPage = 12;
    maxPages: number;
    disableCancelled = true;

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
            this.loadedProjects = [...projects];
            this.loadedProjects = this.loadedProjects.reverse();
            console.log([...this.loadedProjects])
            if (this.disableCancelled) {
                this.loadedProjects.forEach(element => {
                    if (element.status.toLowerCase().includes("Cancelled".toLowerCase())) {
                        console.log(element);
                        const index = this.loadedProjects.indexOf(element, 0);
                        if (index > -1) {
                            this.loadedProjects.splice(index, 0);
                        }

                    }
                });
            }

            this.selectedProjects = this.loadedProjects.slice((this.pageNumber - 1) * this.maxNumberPerPage, (this.pageNumber - 1) * this.maxNumberPerPage + this.maxNumberPerPage);
            this.maxPages = Math.ceil(this.loadedProjects.length / this.maxNumberPerPage);
        } else {
            this.projectServiceSubsription = this.projectService
                .getProjects()
                .subscribe((result: Project[]) => {
                    this.loadedProjects = [...result];
                    this.loadedProjects = this.loadedProjects.reverse();
                    this.selectedProjects = this.loadedProjects.slice((this.pageNumber - 1) * this.maxNumberPerPage, (this.pageNumber - 1) * this.maxNumberPerPage + this.maxNumberPerPage);
                    this.maxPages = Math.ceil(this.loadedProjects.length / this.maxNumberPerPage);
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
