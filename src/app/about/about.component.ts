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
      pic: 'assets/nodejs.webp',
      skill: 50,
    },
    {
      name: 'C#',
      pic: 'assets/c.webp',
      skill: 40,
    },
  ];

  display: { name: string; pic: string } | undefined = undefined;

  setDisplay(name?: string, pic?: string) {
    if (name && pic) {
      this.display = { name, pic };
    } else this.display = undefined;
  }

  constructor() {}

  ngOnInit(): void {}
}
