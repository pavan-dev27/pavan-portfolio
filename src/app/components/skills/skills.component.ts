import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeCategory = 'all';

  skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      icon: 'fas fa-server',
      color: '#00d4ff',
      skills: ['Java 8', 'Java 17', 'Spring Boot 2.x/3.x', 'Spring Framework', 'Spring Security', 'Spring Data JPA', 'Hibernate ORM', 'REST API', 'Microservices']
    },
    {
      category: 'Frontend',
      icon: 'fas fa-desktop',
      color: '#7c3aed',
      skills: ['Angular 19', 'TypeScript', 'JavaScript', 'ExtJS']
    },
    {
      category: 'Database',
      icon: 'fas fa-database',
      color: '#10b981',
      skills: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimization', 'Reverse Engineering', 'SQL']
    },
    {
      category: 'DevOps & Tools',
      icon: 'fas fa-tools',
      color: '#f59e0b',
      skills: ['Maven', 'Git', 'GitHub', 'GitLab', 'Docker (Basic)', 'CI/CD Pipelines']
    },
    {
      category: 'Cloud',
      icon: 'fas fa-cloud',
      color: '#ef4444',
      skills: ['AWS S3', 'AWS SQS', 'GCP Cloud Storage', 'GCP IAM', 'OAuth 2.0', 'Cloud Functions']
    },
    {
      category: 'Quality',
      icon: 'fas fa-shield-alt',
      color: '#06b6d4',
      skills: ['JUnit', 'SonarQube', 'PMD', 'SpotBugs', 'Checkstyle', 'TDD', 'Code Review', 'Integration Testing']
    }
  ];

  hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  proficiencies = [
    { name: 'Java / Spring Boot', level: 90 },
    { name: 'Microservices', level: 85 },
    { name: 'Angular / TypeScript', level: 80 },
    { name: 'REST API Design', level: 88 },
    { name: 'PostgreSQL / MySQL', level: 80 },
    { name: 'Code Quality Tools', level: 85 }
  ];
}
