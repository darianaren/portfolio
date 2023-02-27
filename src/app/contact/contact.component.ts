import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private formBuilder: FormBuilder) {}

  formContact = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  get name() {
    return this.formContact.get('name') as FormControl;
  }
  get email() {
    return this.formContact.get('email') as FormControl;
  }
  get message() {
    return this.formContact.get('message') as FormControl;
  }

  loading: boolean = true;
  success: boolean = true;
  error: boolean = true;

  send() {
    this.loading = false;
    fetch('https://formsubmit.co/ajax/darianarengifo@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(this.formContact.value),
    })
      .then(() => {
        this.loading = true;
        this.success = false;
        setTimeout(() => {
          this.success = true;
        }, 5000);
      })
      .catch(() => {
        this.loading = true;
        this.error = false;
        setTimeout(() => {
          this.error = true;
        }, 5000);
      });
  }
}
