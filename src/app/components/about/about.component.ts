import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    { icon: 'fas fa-rocket', label: 'System Efficiency', value: '+30%', desc: 'Improved processing efficiency' },
    { icon: 'fas fa-bug', label: 'Bug Reduction', value: '40%', desc: 'Critical bugs eliminated' },
    { icon: 'fas fa-server', label: 'API Uptime', value: '99.5%', desc: 'Reliability guaranteed' },
    { icon: 'fas fa-code-branch', label: 'Microservices', value: '15', desc: '2 Built & 13 Maintaining' }
  ];

  languages = ['English', 'Hindi', 'Marathi', 'Gujarati'];
}
