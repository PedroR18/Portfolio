import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {
  @Output() windowEmitter = new EventEmitter<string>();


  closeWindow() {
    this.windowEmitter.emit('');
  }

  constructor() {}

  ngOnInit(): void {}
}
