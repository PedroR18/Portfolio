import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss'],
})
export class ProjectShowcaseComponent implements OnInit {
  @Input() project = {
    name: '',
    description: '',
    pic: '',
    link: '',
    github: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
