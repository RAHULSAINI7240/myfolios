import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  public onSubmit(e?: Event) {
    if (e) e.preventDefault();
    if (this.contactForm.valid) {
      console.log('Sending email...', this.contactForm.value);

      // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
      const serviceID = 'service_g8cx5ct';
      const templateID = 'template_1xv9mcq';
      const publicKey = 'XyujzqbiG4Kw_3Ltr';

      // We need to pass the form element or an object matching the template params.
      // Since we are using reactive forms, we can construct the object manually or if we have a form reference.
      // But emailjs.send() is easier with JSON data than sendForm() if we don't have a direct HTMLFormElement reference handy or want to be cleaner.
      // However, send() takes (serviceID, templateID, templateParams, publicKey).

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        to_name: 'Rahul Saini' // Or whoever the collection is for
      };

      emailjs.send(serviceID, templateID, templateParams, { publicKey: publicKey })
        .then(() => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          this.contactForm.reset();
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again or check console for details.');
        });
    }
  }
}
