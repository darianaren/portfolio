import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent {
  @Input() certificate?: {
    title: string;
    image: string;
    knowledge: string[];
    description: string[];
  };

  @Input() status?: boolean;

  @Output() certificateClose = new EventEmitter<boolean>();

  close() {
    this.certificateClose.emit(false);
  }
}
