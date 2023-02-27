import { Component } from '@angular/core';
import { projects, certificates } from 'src/data/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = projects;
  certificates = certificates;
  currentProject?: {
    title: string;
    behance: string;
    github: string;
    image: string;
    tech: string[];
    video: string;
    summary: string[];
    key: string[];
    allTech: string[];
  };
  currentCertificate?: {
    title: string;
    image: string;
    knowledge: string[];
    description: string[];
  };
  projectStatus: boolean = false;
  certificateStatus: boolean = false;

  projectOpen(index: number) {
    this.projectStatus = true;
    this.currentProject = projects[index];
  }

  projectClose() {
    this.projectStatus = false;
  }

  certificateOpen(index: number) {
    this.certificateStatus = true;
    this.currentCertificate = certificates[index];
  }

  certificateClose() {
    this.certificateStatus = false;
  }
}
