import { Component, OnDestroy, OnInit } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CookieService } from 'ngx-cookie-service';
import { projects } from "../../offlineProjects";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AchievementService } from 'src/app/services/achievement-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    listOfTypes = ["Python", "Angular", "rpg maker xp", "Pokemon Essentials", "Scratch", "Minecraft", "C#", "NSMB Editor", "TS", "Typescript", "CSS", "HTML", "JS", "Javascript", "PHP"]
    listOfStatuses = ["In Progress", "Completed", "On Hold", "Cancelled", "Only The Idea", "Never started", "Chance of Updates", "Might Update", "ignore this"]
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
        "Cancelled": "none",
        "CSS": "css ico",
        "HTML": "html ico",
        "JS": "js ico",
        "Javascript": "js ico",
        "PHP": "php cute",
        "Typescript": "ts ico",
        "TS": "ts ico",
        "Only The Idea": "lamp",
        "never started": "lamp",
        "Chance of Updates": "might update",
        "Might Update": "might update",
        "ignore this": "ignore"
    }
    title = 'ProjectsViewer';
    loadedProjects: Project[] = [];
    loadedProjectsToStore: Project[] = [];
    projectServiceSubsription: Subscription;
    routeSub: Subscription;
    pageNumber: number;
    selectedProjects: Project[] = [];
    maxNumberPerPage = 12;
    maxPages: number;
    filterText = "!ignore this !pokemon essentials";
    filterTextInput: string = "";

    constructor(private achievementService: AchievementService, private ActivatedRoute: ActivatedRoute, private projectService: ProjectService, private cookieService: CookieService, private router: Router) { }

    ngOnDestroy(): void {
        if (this.projectServiceSubsription) {
            this.projectServiceSubsription.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }

    ngOnInit(): void {
        if (this.cookieService.check("filterTexInput")) {
            this.filterText = this.cookieService.get("filterTexInput");
            this.filterTextInput = this.filterText;
        } else {
            this.cookieService.set("filterTexInput", this.filterText);
        }
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
            this.loadedProjectsToStore = [...this.loadedProjects];
            this.achievementService.getAchievement('OfflineMode');
            this.filterAndGetPage();
        } else {
            this.achievementService.getAchievement('OnlineMode');
            this.projectServiceSubsription = this.projectService
                .getProjects()
                .subscribe((result: Project[]) => {
                    this.loadedProjects = [...result];
                    this.loadedProjects = this.loadedProjects.reverse();
                    this.loadedProjectsToStore = [...this.loadedProjects];
                    this.filterAndGetPage();
                });
        }
    }

    filterAndGetPage() {
        if (this.filterText.length > 0) {
            for (let index = 0; index < this.loadedProjects.length; index++) {
                this.listOfTypes.forEach(element => {
                    if (index > -1 && this.filterText.toLocaleLowerCase().includes(`!${element}`.toLocaleLowerCase()) && this.loadedProjects[index].type.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase())) {
                        this.loadedProjects.splice(index, 1);
                        index--;
                    }
                    if (index > -1 && this.filterText.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase()) && !this.filterText.toLocaleLowerCase().includes(`!${element}`.toLocaleLowerCase()) && !this.loadedProjects[index].type.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase())) {
                        this.loadedProjects.splice(index, 1);
                        index--;
                    }
                });
                this.listOfStatuses.forEach(element => {
                    if (index > -1 && this.filterText.toLocaleLowerCase().includes(`!${element}`.toLocaleLowerCase()) && this.loadedProjects[index].status.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase())) {
                        this.loadedProjects.splice(index, 1);
                        index--;
                    }
                    if (index > -1 && this.filterText.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase()) && !this.filterText.toLocaleLowerCase().includes(`!${element}`.toLocaleLowerCase()) && !this.loadedProjects[index].status.toLocaleLowerCase().includes(`${element}`.toLocaleLowerCase())) {
                        this.loadedProjects.splice(index, 1);
                        index--;
                    }
                });
            }
        }
        this.selectedProjects = this.loadedProjects.slice((this.pageNumber - 1) * this.maxNumberPerPage, (this.pageNumber - 1) * this.maxNumberPerPage + this.maxNumberPerPage);
        this.maxPages = Math.ceil(this.loadedProjects.length / this.maxNumberPerPage);
    }

    openProjectDetails(id: number): void {
        if (this.cookieService.get('ProjectsViewer.mode') === 'Offline') {
            this.router.navigate(['offlineProject', id.toString()]);
        } else {
            this.router.navigate(['project', id.toString()]);
        }
    }

    moveToPage(pageNumber: number): void {
        this.saveInput();
        this.router.navigate(['r', pageNumber]);
    }

    nextPage(number: number): void {
        var y: number = + this.pageNumber;
        if (y + number > 0 && y + number <= this.maxPages) {
            this.moveToPage(y + number)
        }
    }

    sendTheNewValue(event) {
        this.filterText = event.target.value;
        this.loadedProjects = [...this.loadedProjectsToStore]
        this.filterAndGetPage();
    }

    saveInput() {
        this.cookieService.set("filterTexInput", this.filterText);
    }


}
