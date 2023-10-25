import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  @Input() project?: Project;
  @Output() projectUpdated = new EventEmitter<Project[]>();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  updateProject(project: Project) {
    if (localStorage.getItem('ProjectsViewer.mode') === 'Offline') {
      alert("You are in offline mode, so you can't update the project");
      this.cancelEditor();
    } else {
      this.projectService.updateProject(project).subscribe((projects: Project[]) => this.projectUpdated.emit(projects));
    }
  }

  deleteProject(project: Project) {
    if (localStorage.getItem('ProjectsViewer.mode') === 'Offline') {
      alert("You are in offline mode, so you can't delete the project");
      this.cancelEditor();
    } else {
      this.projectService.deleteProject(project).subscribe((projects: Project[]) => this.projectUpdated.emit(projects));
    }
  }

  createProject(project: Project) {
    if (localStorage.getItem('ProjectsViewer.mode') === 'Offline') {
      alert("You are in offline mode, so you can't create a new project");
      this.cancelEditor();
    } else {
      this.projectService.createProject(project).subscribe((projects: Project[]) => this.projectUpdated.emit(projects));
    }
  }
  cancelEditor() {
    this.project = undefined;
  }

  duplicateProject(oldProject: Project) {
    var project = new Project();
    oldProject.id = project.id;
    this.createProject(oldProject);
  }

}


