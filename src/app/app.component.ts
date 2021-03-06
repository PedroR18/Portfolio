import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  status = 'search';

  windowStatus = 'Sobre';

  notification = false;

  setWindowStatus(str: string) {
    this.windowStatus = str;
    this.status = 'window';
  }

  setStatus(str: string) {
    this.status = str;
  }

  setNotification(state: boolean) {
    this.notification = state;
  }

  width = window.innerWidth;
  height = window.innerHeight;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
