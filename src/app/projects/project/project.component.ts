import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() project?: {
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

  @Input() status?: boolean;

  @Output() projectClose = new EventEmitter<boolean>();

  close() {
    this.projectClose.emit(false);
  }
}
