import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
// import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';

import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterModule, About, Projects, Contact, ScrollRevealDirective, LottieComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  isDownloading = false;
  downloadComplete = false;

  socialLinks = [
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com/RAHULSAINI7240' },
    { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', url: 'https://www.linkedin.com/in/rahulsaini7240' },
    { name: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/instagram.svg', url: 'https://www.instagram.com/rahul.saini_7240' },
    { name: 'Facebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg', url: 'https://www.facebook.com/saini.sab.737?rdid=rWdpfZm3Jr1kTLmw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HTLHrqvdL%2F#' },
    { name: 'Mail', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/gmail.svg', url: 'mailto:rahulsaini72407@gmail.com' }
  ];

  downloadCV() {
    this.isDownloading = true;
    this.downloadComplete = false;

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'assets/Resume/RAHUL-SAINI-Resume.pdf';
      link.download = 'Rahul-Saini-Resume.pdf';
      link.click();

      this.isDownloading = false;
      this.downloadComplete = true;

      setTimeout(() => {
        this.downloadComplete = false;
      }, 1000); // Show checkmark for 1s then revert
    }, 1000); // Match CSS progress animation duration
  }

  videoUrl = 'assets/Animation/dev_worj.mp4';

  animationOptions = {
    path: 'assets/Animation/developer_animation.json',
    loop: true,
    autoplay: true
  };

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
