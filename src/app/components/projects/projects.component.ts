import { Component } from '@angular/core';

interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  icon: string;
  color: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Text Extraction Engine',
      subtitle: 'Enterprise Document Processing Platform',
      period: '2024 – Present',
      description: 'A distributed, cloud-native document processing system designed to streamline text extraction, analysis, and reporting at enterprise scale.',
      highlights: [
        'Built 15 loosely coupled microservices handling end-to-end text extraction pipeline',
        'Integrated AWS S3 for cloud document storage with versioning, improving data integrity',
        'Implemented SonarQube, PMD, SpotBugs & Checkstyle quality gates, reducing technical debt by 35%',
        'Developed Angular 14 frontend with responsive design and real-time progress tracking',
        'Improved SonarQube maintainability score from Grade B to Grade A'
      ],
      tech: ['Java 17', 'Spring Boot 3.x', 'Microservices', 'Angular 14', 'AWS S3', 'MySQL', 'REST API'],
      icon: 'fas fa-file-alt',
      color: '#00d4ff',
      featured: true
    },
    {
      title: 'CEICED Portal',
      subtitle: 'Gujarat Government Licensing Portal System',
      period: '2023 – 2024',
      description: 'Official government portal for issuing authorized licenses to Supervisors, Wiremen, Contractors, and Lift/Escalator operators across Gujarat.',
      highlights: [
        'Designed and implemented 3-module licensing portal for 4 operator categories',
        'Created 25+ RESTful APIs, reducing data retrieval time by 40%',
        'Integrated secure payment gateway achieving 100% transaction success rate',
        'Built ExtJS-based UI with client-side validations, increasing user engagement by 15%',
        'Improved application performance by 30% while reducing resource usage by 20%'
      ],
      tech: ['Java 8', 'Spring Boot 2.7', 'JSP', 'ExtJS', 'PostgreSQL', 'Hibernate', 'Payment Gateway'],
      icon: 'fas fa-file-alt',
      color: '#7c3aed',
      featured: true
    },
    {
      title: 'LB Exam Portal',
      subtitle: 'Online Examination Management System',
      period: '2023 – 2024',
      description: 'A full-featured exam management portal built with JSP and Java EE, handling exam scheduling, fee collection, and result management.',
      highlights: [
        'Designed and maintained Java-based exam management application with JSP frontend',
        'Developed RESTful APIs and JavaScript/jQuery frontend interactions',
        'Implemented repository layer using Java EE technologies for seamless data operations',
        'Integrated online payment for exam fee collection'
      ],
      tech: ['Java 8', 'JSP', 'JavaScript', 'jQuery', 'Apache Tomcat', 'MySQL', 'PostgreSQL'],
      icon: 'fas fa-file-alt',
      color: '#10b981',
      featured: true
    }
  ];
}
