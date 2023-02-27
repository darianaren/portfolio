import { Component } from '@angular/core';
import { knowledge } from 'src/data/data';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css'],
})
export class KnowledgeComponent {
  knowledges = knowledge.knowledges;
  skills = knowledge.skills;
  details: string = '';
  viewDetails(knowledge: string) {
    this.details == knowledge
      ? (this.details = '')
      : (this.details = knowledge);
  }
}
