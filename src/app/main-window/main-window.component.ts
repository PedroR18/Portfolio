import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
})
export class MainWindowComponent implements OnInit {
  projects = [
    {
      name: 'Movie Finder',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnirepellendus ullam nam nulla non voluptas fugiat eligendi dolorem quos cumut, deserunt, accusantium incidunt animi ratione facere distinctio?Facere, nemo!',
      pic: 'assets/movie-finder.webp',
      link: 'https://movie-discover.vercel.app/',
      github: 'https://github.com/PedroR18/Movie-Finder',
    },
    {
      name: 'E-Commerce Store',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnirepellendus ullam nam nulla non voluptas fugiat eligendi dolorem quos cumut, deserunt, accusantium incidunt animi ratione facere distinctio?Facere, nemo!',
      pic: 'assets/fashion-store.webp',
      link: 'https://fashion-store-ashen.vercel.app/',
      github: 'https://github.com/PedroR18/E-Commerce-Fashion-Store',
    },
    {
      name: 'Message App',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnirepellendus ullam nam nulla non voluptas fugiat eligendi dolorem quos cumut, deserunt, accusantium incidunt animi ratione facere distinctio?Facere, nemo!',
      pic: 'assets/talk-to.webp',
      link: 'https://talk-to-chi.vercel.app/',
      github: 'https://github.com/PedroR18/Message-App',
    },
  ];
  @Output() windowEmitter = new EventEmitter<string>();

  closeWindow() {
    this.windowEmitter.emit('');
  }

  @Output() windowStatusEmitter = new EventEmitter<string>();

  @Input() status = 'Sobre';

  setStatus(str: string) {
    this.windowStatusEmitter.emit(str);
  }

  saveEmail() {
    navigator.clipboard.writeText('ribeiro-1997@hotmail.com');
    this.showNotification();
  }

  @Output() notificationEmitter = new EventEmitter<boolean>();

  showNotification() {
    this.notificationEmitter.emit(true);
    setTimeout(() => this.notificationEmitter.emit(false), 5000);
  }

  openGitHub() {
    window.open('https://github.com/PedroR18', '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
