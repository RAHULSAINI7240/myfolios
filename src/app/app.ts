import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('portfolio');
  protected loading = signal(true);

  ngOnInit() {
    // Simulate loading time or wait for window load
    setTimeout(() => {
      this.loading.set(false);
    }, 2500); // 2.5 seconds minimum load time for effect
  }
}
