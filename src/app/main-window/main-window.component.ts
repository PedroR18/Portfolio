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
        'Aplicação de recomendações de filmes e séries de TV escrito em React usando a API TMDB. O utilizador escolhe até 4 dos seus filmes ou programas de TV favoritos e instantaneamente é gerado um conjunto de recomendações, cada um acompanhada da respetiva sinopse, elenco principal e trailer cinematográfico.',
      pic: 'assets/movie-finder.webp',
      link: 'https://movie-discover.vercel.app/',
      github: 'https://github.com/PedroR18/Movie-Finder',
    },
    {
      name: 'E-Commerce Store',
      description:
        'Uma moderna loja de roupa online com efeitos visuais avançados e um layout visual criativo e colorido. Criado com React, este website possui também um sistema de pesquisa avançado bem como um front-end de carrinho de compras totalmente funcional.',
      pic: 'assets/fashion-store.webp',
      link: 'https://fashion-store-ashen.vercel.app/',
      github: 'https://github.com/PedroR18/E-Commerce-Fashion-Store',
    },
    {
      name: 'Message App',
      description:
        'Uma aplicação de mensagens construída com Angular com um design em painéis que proporciona uma experiência intuitiva ao utilizador e uma estética minimalista. Permite pesquisar por contatos e mensagens e suporta mensagens de texto e imagens.',
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
