import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dock-icon',
  templateUrl: './dock-icon.component.html',
  styleUrls: ['./dock-icon.component.scss'],
})
export class DockIconComponent implements OnInit {
  @Input() img = '';

  constructor() {}

  ngOnInit(): void {}
}
