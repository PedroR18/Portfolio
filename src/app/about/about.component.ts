import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  technologies = [
    {
      name: 'HTML',
      pic: 'assets/html.webp',
      skill: 90,
    },
    {
      name: 'CSS',
      pic: 'assets/css.webp',
      skill: 90,
    },
    {
      name: 'Sass',
      pic: 'assets/sass.webp',
      skill: 90,
    },
    {
      name: 'Javascript',
      pic: 'assets/javascript.webp',
      skill: 80,
    },
    {
      name: 'Typescript',
      pic: 'assets/typescript.webp',
      skill: 70,
    },
    {
      name: 'React',
      pic: 'assets/react.webp',
      skill: 60,
    },
    {
      name: 'Angular',
      pic: 'assets/angular.webp',
      skill: 50,
    },
    {
      name: 'NodeJS',
      pic: 'assets/node.webp',
      skill: 50,
    },
  ];

  display = '';

  setDisplay(str: string) {
    this.display = str;
  }

  constructor() {}

  ngOnInit(): void {}
}
