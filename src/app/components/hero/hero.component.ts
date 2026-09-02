import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  roles = ['Full Stack Java Developer', 'Software Engineer', 'Microservices Architect'];
  currentRoleIndex = 0;
  private typingTimer: any;
  private isDeleting = false;
  private charIndex = 0;

  ngOnInit(): void {
    this.typeText();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

  typeText(): void {
    const currentRole = this.roles[this.currentRoleIndex];
    if (this.isDeleting) {
      this.displayText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      speed = 400;
    }

    this.typingTimer = setTimeout(() => this.typeText(), speed);
  }

  scrollTo(href: string): void {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
