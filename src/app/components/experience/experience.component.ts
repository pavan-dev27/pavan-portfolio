import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
  achievements: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  activeIndex = 0;

  experiences: Experience[] = [
    {
      company: 'Brightleaf Solutions Pvt Ltd',
      role: 'Associate Software Engineer',
      period: 'Jul 2024 – Present',
      location: 'Pune, India',
      current: true,
      description: 'Working on enterprise-grade document processing platform using microservices architecture with a 9-member Agile team.',
      achievements: [
        'Developed and maintained 15 microservices for Text Extraction Engine, improving document processing efficiency by 30%',
        'Implemented AWS S3 integration for cloud-based document storage, reducing storage costs by 25%',
        'Conducted code quality analysis using SonarQube, PMD, and SpotBugs — reducing critical bugs by 40% and code duplication by 30%',
        'Built RESTful APIs with Spring Boot 3.x achieving 99.5% API uptime',
        'Enhanced Angular-based UI components, improving UX and reducing processing time by 20%',
        'Optimized database queries with Hibernate ORM and PostgreSQL, reducing response time by 35%'
      ],
      tech: ['Java 17', 'Spring Boot 3.x', 'Angular 14', 'Microservices', 'AWS S3', 'PostgreSQL', 'SonarQube', 'Docker']
    },
    {
      company: 'Nascent Info Technologies Pvt Ltd',
      role: 'Associate Software Engineer',
      period: 'Feb 2023 – Jul 2024',
      location: 'Ahmedabad, India',
      current: false,
      description: 'Designed and developed government-grade portal and exam platform for Gujarat State serving multiple modules with an 8-member team.',
      achievements: [
        'Designed and developed CEICED Portal for Gujarat Government with 3 modules, serving licensing for supervisors, wiremen and contractors',
        'Created 25+ RESTful APIs using Spring Boot, reducing data retrieval time by 40%',
        'Implemented payment gateway integration, achieving 100% transaction success rate',
        'Performed database schema design with Hibernate and PostgreSQL, optimizing storage efficiency by 25%',
        'Executed comprehensive code reviews reducing post-deployment defects by 20% and debugging time by 30%',
        'Refactored legacy code improving application performance by 45% and reducing resource utilization by 20%'
      ],
      tech: ['Java 11', 'Spring Boot 2.7', 'JSP', 'ExtJS', 'PostgreSQL', 'Hibernate', 'REST API', 'GitLab']
    }
  ];
}
