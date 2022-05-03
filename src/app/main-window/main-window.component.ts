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
      link: '',
      github: '',
    },
    {
      name: 'E-Commerce Store',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnirepellendus ullam nam nulla non voluptas fugiat eligendi dolorem quos cumut, deserunt, accusantium incidunt animi ratione facere distinctio?Facere, nemo!',
      pic: 'assets/fashion-store.webp',
      link: '',
      github: '',
    },
    {
      name: 'Message App',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnirepellendus ullam nam nulla non voluptas fugiat eligendi dolorem quos cumut, deserunt, accusantium incidunt animi ratione facere distinctio?Facere, nemo!',
      pic: 'assets/talk-to.webp',
      link: '',
      github: '',
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
  constructor() {}

  ngOnInit(): void {}
}
