import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    { title: 'Portfolio Website', description: 'This very website, built with Angular and Material.', image: 'https://via.placeholder.com/300' },
    { title: 'E-commerce App', description: 'A full-featured online store with cart and checkout.', image: 'https://via.placeholder.com/300' },
    { title: 'Task Manager', description: 'Productivity tool to manage daily tasks and projects.', image: 'https://via.placeholder.com/300' },
  ];
}
