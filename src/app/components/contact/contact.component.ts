import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  submitStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'pavangbakal@gmail.com', href: 'mailto:pavangbakal@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 8010431769', href: 'tel:+918010431769' },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/pavangbakal', href: 'https://www.linkedin.com/in/pavangbakal' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Pune / Khamgaon, Maharashtra', href: null }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.submitStatus = 'sending';

    // Simulate send — replace with real API call
    setTimeout(() => {
      this.submitStatus = 'success';
      this.contactForm.reset();
      this.submitted = false;
    }, 1500);
  }
}
