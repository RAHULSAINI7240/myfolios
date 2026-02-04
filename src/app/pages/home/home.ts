import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
// import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';

import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterModule, About, Projects, Contact, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  videoUrl = 'assets/Animation/dev_worj.mp4';


  skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    // { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  ];

  proficiency = [
    { name: 'Frontend Development', value: 80 },
    { name: 'Design & UX/UI', value: 80 },
    { name: 'Programming', value: 50 }
  ];

  experiences = [
    {
      company: 'Autovyn Consectation PVT LTD',
      role: 'Software Developer', // Assuming role based on previous inputs, or generic
      period: 'Nov 2024 - Present',
      description: 'Software Company',
      logo: 'https://via.placeholder.com/100x100?text=Autovyn' // Placeholder
    }
  ];

  ngAfterViewInit() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.muted = true;
      this.videoPlayer.nativeElement.play().catch(error => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }
}
